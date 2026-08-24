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
  type SiteContent 
} from "@/lib/siteContent";

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
          safeFetch<any>(brandingQuery, null),
          safeFetch<any>(navigationQuery, null),
          safeFetch<any>(footerQuery, null),
          safeFetch<any[]>(servicesListQuery, []),
          safeFetch<any[]>(testimonialsListQuery, []),
          safeFetch<any[]>(faqListQuery, []),
          safeFetch<any[]>(milestonesListQuery, []),
          safeFetch<any[]>(internshipsListQuery, []),
          safeFetch<any[]>(brandPartnersListQuery, []),
          safeFetch<any[]>(awardsListQuery, []),
        ]);

        if (!cancelled) {
          const merged = mergeSiteContent(siteData);
          const final = {
            ...merged,
            branding: brandingData ? { ...merged.branding, ...brandingData } : merged.branding,
            navigation: navigationData ? { ...merged.navigation, ...navigationData } : merged.navigation,
            footer: footerData ? { ...merged.footer, ...footerData } : merged.footer,
            serviceList: services && services.length > 0 ? services : merged.serviceList,
            testimonials: testimonials && testimonials.length > 0 
              ? { 
                  ...merged.testimonials, 
                  items: testimonials.map(t => ({
                    id: t._id || t.id || Math.random().toString(),
                    name: t.name || "Client",
                    serviceUsed: t.serviceUsed || t.role || t.company || "Client Partner",
                    text: t.text || t.content || "",
                    imageUrl: t.imageUrl || t.avatarUrl || "https://lambodragroup.com/wp-content/uploads/2025/12/testi-1.png",
                  })) 
                } 
              : merged.testimonials,
            faq: faqs && faqs.length > 0
              ? { ...merged.faq, items: faqs.map(f => ({ q: f.question || f.q, a: f.answer || f.a })) }
              : merged.faq,
            journey: milestones && milestones.length > 0
              ? { ...merged.journey, milestones }
              : merged.journey,
            internships: internships && internships.length > 0
              ? { ...merged.internships, openings: internships }
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
