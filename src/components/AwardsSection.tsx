import { useSiteContent } from "./SiteContentProvider";

const AwardsSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-2.5 w-auto" />
            <span>{content.awards.eyebrow}</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-2.5 w-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            {content.awards.title}
          </h2>
        </div>

        {/* 8 Certificate Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {content.awards.items.map((award, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-3 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="rounded-xl overflow-hidden bg-white border border-slate-100">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-slate-700 font-semibold italic leading-tight">
                {award.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
