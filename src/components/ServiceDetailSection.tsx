import { Play } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const ServiceDetailSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-[#fe7d05] text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Composite Image */}
          <div className="flex justify-center">
            <img
              src="https://lambodragroup.com/wp-content/uploads/2026/05/Trusted-Technology-partner-new.png"
              alt="Trusted Technology Partner Across Markets"
              className="max-w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            
            {/* Eyebrow Header */}
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-3 w-auto brightness-0 invert" />
              <span className="tracking-wide uppercase text-xs font-bold">{content.strength.eyebrow}</span>
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-3 w-auto brightness-0 invert" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {content.strength.title}
            </h2>

            {/* Description */}
            <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
              {content.strength.description}
            </p>

            {/* Light Cream Highlight Pill Cards (Matching Image 1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FFF5E1] text-[#0f172a] p-4 rounded-2xl flex items-center gap-3.5 shadow-md hover:scale-[1.02] transition-transform">
                <div className="h-10 w-10 rounded-full bg-white text-[#fe7d05] flex items-center justify-center shrink-0 shadow-sm border border-orange-200">
                  <Play className="h-4 w-4 fill-[#fe7d05] ml-0.5" />
                </div>
                <span className="font-bold text-xs sm:text-sm leading-snug">
                  Industry-focused technology solutions
                </span>
              </div>

              <div className="bg-[#FFF5E1] text-[#0f172a] p-4 rounded-2xl flex items-center gap-3.5 shadow-md hover:scale-[1.02] transition-transform">
                <div className="h-10 w-10 rounded-full bg-white text-[#fe7d05] flex items-center justify-center shrink-0 shadow-sm border border-orange-200">
                  <Play className="h-4 w-4 fill-[#fe7d05] ml-0.5" />
                </div>
                <span className="font-bold text-xs sm:text-sm leading-snug">
                  Long-term client partnerships
                </span>
              </div>
            </div>

            {/* Pure White Stat Counters (Matching Image 1) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  10+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mt-1">
                  Years of Experience
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  700+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mt-1">
                  Clients
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  200+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mt-1">
                  Projects Delivered
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
