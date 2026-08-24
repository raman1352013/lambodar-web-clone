import { useSiteContent } from "./SiteContentProvider";

const AwardsSection = () => {
  const { content } = useSiteContent();

  const fallbackAwardImage = "https://lambodragroup.com/wp-content/uploads/2025/12/logo-1.png";

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-2.5 w-auto" />
            <span className="uppercase text-xs tracking-wider font-bold">{content.awards.eyebrow}</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-2.5 w-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {content.awards.title}
          </h2>
        </div>

        {/* 8 Certificate Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {content.awards.items.map((award, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center space-y-3 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="rounded-xl overflow-hidden bg-white border border-slate-100 p-2 flex items-center justify-center min-h-[160px]">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="max-h-36 w-auto object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackAwardImage;
                  }}
                />
              </div>
              <p className="text-xs text-slate-700 font-bold leading-tight">
                {award.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
