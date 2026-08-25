import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";

const HeroSection = () => {
  const { content } = useSiteContent();

  const defaultBanner = "/images/banner-1.png";

  return (
    <section className="relative pt-16 md:pt-20 bg-[#FFF5E1] overflow-hidden">
      <div className="w-full">
        <Link to={content?.hero?.ctaHref || "/contact"} className="block w-full">
          {/* Desktop Banner Image */}
          <img
            src={content?.hero?.bannerImageUrl || defaultBanner}
            alt="Lambodra Group | Vehicle Tracking System Banner"
            className="hidden md:block w-full h-auto object-cover max-h-[85vh]"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultBanner;
            }}
          />
          {/* Mobile Banner Image */}
          <img
            src={content?.hero?.mobileBannerImageUrl || defaultBanner}
            alt="Lambodra Group | Vehicle Tracking System Mobile Banner"
            className="block md:hidden w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultBanner;
            }}
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
