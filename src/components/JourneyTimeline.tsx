import { useSiteContent } from "./SiteContentProvider";

const JourneyTimeline = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-[#FFF5E1] text-[#0f172a] font-sans relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-3 w-auto" />
            <span className="tracking-wide uppercase text-xs font-bold">{content.journey.eyebrow}</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-3 w-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {content.journey.title}
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {content.journey.description}
          </p>
        </div>

        {/* Premium Vertical Alternating Timeline */}
        <div className="relative max-w-4xl mx-auto px-2">
          
          {/* Central Gradient Vertical Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full"
            style={{ background: "linear-gradient(to bottom, #0047ab, #00c6ff)" }}
          />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 relative">
            {content.journey.milestones.map((item, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse text-left" : "md:text-right"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0047ab] border-4 border-[#FFF5E1] shadow-md z-10" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-orange-100/60 hover:-translate-y-2 transition-transform duration-300 group">
                      <h3 className="text-2xl font-extrabold text-[#fe7d05] tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                        {item.year}
                      </h3>
                      <p className="text-slate-900 font-bold text-base leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default JourneyTimeline;
