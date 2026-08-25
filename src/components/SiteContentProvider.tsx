import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { 
  defaultSiteContent, 
  mergeSiteContent, 
  siteContentQuery, 
  brandingQuery, 
  navigationQuery, 
  footerQuery, 
  servicesListQuery, 
  testimonialsListQuery, 
  faqListQuery,
  milestonesListQuery,
  internshipsListQuery,
  brandPartnersListQuery,
  awardsListQuery,
  type SiteContent,
  type ServiceItem,
  type TimelineMilestone,
  type InternshipJob,
} from "@/lib/siteContent";

// Loosely-typed Sanity response shapes (CMS payloads are dynamic).
type BrandingData = Partial<SiteContent["branding"]>;
type NavigationData = Partial<SiteContent["navigation"]>;
type FooterData = Partial<SiteContent["footer"]>;
type TestimonialDoc = {
  _id?: string;
  id?: string;
  name?: string;
  serviceUsed?: string;
  role?: string;
  company?: string;
  text?: string;
  content?: string;
  imageUrl?: string;
  avatarUrl?: string;
};
type FaqDoc = { question?: string; q?: string; answer?: string; a?: string };
type MilestoneDoc = TimelineMilestone;
type InternshipDoc = InternshipJob;
type SanityServiceDoc = {
  _id?: string;
  id?: string;
  title?: string;
  slug?: { current?: string } | string;
  category?: string;
  shortDescription?: string;
  fullDescription?: string;
  iconUrl?: string;
  imageUrl?: string;
  features?: string[];
  benefits?: string[];
};
type SanityAwardDoc = {
  _id?: string;
  title?: string;
  issuer?: string;
  year?: string;
  description?: string;
  imageUrl?: string;
};
type SanityInternshipDoc = {
  _id?: string;
  id?: string;
  title?: string;
  department?: string;
  location?: string;
  type?: string;
  experience?: string;
  description?: string;
  requirements?: string[];
};
type BrandPartnerDoc = {
  _id?: string;
  id?: string;
  name?: string;
  slug?: { current?: string } | string;
  tier?: string;
  category?: string;
  description?: string;
  logoUrl?: string;
  targetServiceSlug?: string;
};

type SiteContentContextValue = {
  content: SiteContent;
  isLoading: boolean;
  isSanityConfigured: boolean;
  error: string | null;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

const safeFetch = async <T,>(query: string, fallback: T): Promise<T> => {
  try {
    const res = await sanityClient.fetch<T>(query);
    return res ?? fallback;
  } catch (err) {
    console.warn(`Sanity query warning for [${query}]:`, err);
    return fallback;
  }
};

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      setIsLoading(true);

      try {
        const [
          siteData, 
          brandingData, 
          navigationData, 
          footerData, 
          services, 
          testimonials, 
          faqs, 
          milestones, 
          internships, 
          brandPartners, 
          awards
        ] = await Promise.all([
          safeFetch<Partial<SiteContent> | null>(siteContentQuery, null),
          safeFetch<BrandingData | null>(brandingQuery, null),
          safeFetch<NavigationData | null>(navigationQuery, null),
          safeFetch<FooterData | null>(footerQuery, null),
          safeFetch<SanityServiceDoc[]>(servicesListQuery, []),
          safeFetch<TestimonialDoc[]>(testimonialsListQuery, []),
          safeFetch<FaqDoc[]>(faqListQuery, []),
          safeFetch<MilestoneDoc[]>(milestonesListQuery, []),
          safeFetch<SanityInternshipDoc[]>(internshipsListQuery, []),
          safeFetch<BrandPartnerDoc[]>(brandPartnersListQuery, []),
          safeFetch<SanityAwardDoc[]>(awardsListQuery, []),
        ]);

        if (!cancelled) {
          const merged = mergeSiteContent(siteData);
          const final = {
            ...merged,
            branding: brandingData ? { ...merged.branding, ...brandingData } : merged.branding,
            navigation: navigationData ? { ...merged.navigation, ...navigationData } : merged.navigation,
            footer: footerData ? { ...merged.footer, ...footerData } : merged.footer,
            serviceList: services && services.length > 0
              ? services.map((s): ServiceItem => ({
                  id: s._id || s.id || "",
                  title: s.title || "",
                  slug: typeof s.slug === "string" ? s.slug : (s.slug?.current as string) || s._id || s.id || "",
                  category: s.category || "",
                  shortDescription: s.shortDescription || "",
                  fullDescription: s.fullDescription,
                  iconUrl: s.iconUrl,
                  imageUrl: s.imageUrl,
                  features: Array.isArray(s.features) ? s.features : [],
                  benefits: Array.isArray(s.benefits) ? s.benefits : [],
                }))
              : merged.serviceList,
            testimonials: testimonials && testimonials.length > 0
              ? {
                  ...merged.testimonials,
                  items: testimonials.map((t) => ({
                    id: t._id || t.id || Math.random().toString(),
                    name: t.name || "Client",
                    serviceUsed: t.serviceUsed || t.role || t.company || "Client Partner",
                    text: t.text || t.content || "",
                    imageUrl: t.imageUrl || t.avatarUrl || "https://lambodragroup.com/wp-content/uploads/2025/12/testi-1.png",
                  })),
                }
              : merged.testimonials,
            faq: faqs && faqs.length > 0
              ? { ...merged.faq, items: faqs.map((f) => ({ q: f.question || f.q, a: f.answer || f.a })) }
              : merged.faq,
            journey: milestones && milestones.length > 0
              ? { ...merged.journey, milestones: milestones.map((m) => ({ year: m.year, title: m.title, subtitle: m.subtitle, location: m.location })) }
              : merged.journey,
            awards: awards && awards.length > 0
              ? {
                  ...merged.awards,
                  items: awards.map((a) => ({
                    title: a.title || "",
                    caption: a.issuer ? `${a.issuer}${a.year ? " | " + a.year : ""}` : "",
                    imageUrl: a.imageUrl || "",
                  })),
                }
              : merged.awards,
            internships: internships && internships.length > 0
              ? {
                  ...merged.internships,
                  openings: internships.map((j) => ({
                    id: j._id || j.id || "",
                    title: j.title || "",
                    department: j.department || "General",
                    location: j.location || "Accra, Ghana",
                    type: j.type || "Full-Time",
                    experience: j.experience || "",
                    description: j.description || "",
                    requirements: Array.isArray(j.requirements) ? j.requirements : [],
                  })),
                }
              : merged.internships,
          } as SiteContent;

          setContent(final);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load Sanity content");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return <SiteContentContext.Provider value={{ content, isLoading, isSanityConfigured, error }}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }

  return context;
};
