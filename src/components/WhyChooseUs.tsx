import { useSiteContent } from "./SiteContentProvider";

const WhyChooseUs = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Video Box Placeholder / Player */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-800 bg-slate-950">
          <video
            muted
            controls
            className="w-full h-auto rounded-3xl"
            poster="https://lambodragroup.com/wp-content/uploads/2026/05/Final_Hero_Section-banner.png"
          >
            <source src="https://lambodragroup.com/wp-content/uploads/2026/03/Final_Homepage_Video_updated.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {content.excellence.title}
          </h2>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {content.excellence.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl text-center space-y-3 hover:border-[#fe7d05] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={pillar.iconUrl}
                    alt={pillar.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
