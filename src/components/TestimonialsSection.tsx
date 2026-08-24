import { Star } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const TestimonialsSection = () => {
  const { content } = useSiteContent();

  const defaultAvatar = "https://lambodragroup.com/wp-content/uploads/2025/12/testi-1.png";

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-2.5 w-auto" />
            <span>{content.testimonials.eyebrow}</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-2.5 w-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            {content.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#fe7d05] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fe7d05]" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={item.imageUrl || defaultAvatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#fe7d05] shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultAvatar;
                  }}
                />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-base">{item.name}</h4>
                  <h5 className="text-xs text-[#fe7d05] font-medium leading-snug">
                    {item.serviceUsed}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
