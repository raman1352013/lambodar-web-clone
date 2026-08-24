import { ShieldCheck, Zap, Award, TrendingUp, Users } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const fallbackIcons = [ShieldCheck, Zap, Award, TrendingUp, Users];

const WhyChooseUs = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-slate-900 text-white relative font-sans">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-3 w-auto" />
            <span className="uppercase text-xs tracking-wider font-bold">Why Choose Us</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-3 w-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {content.excellence.title}
          </h2>
        </div>

        {/* 5 Excellence Cards Grid (Spacious, Clear & Exact Content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {content.excellence.pillars.map((pillar, idx) => {
            const FallbackIcon = fallbackIcons[idx % fallbackIcons.length];
            return (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 p-7 rounded-3xl text-center space-y-4 hover:border-[#fe7d05] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="h-20 w-20 mx-auto mb-5 flex items-center justify-center p-3 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                    <img
                      src={pillar.iconUrl}
                      alt={pillar.title}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
