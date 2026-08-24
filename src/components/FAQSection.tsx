import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const FAQSection = () => {
  const { content } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const fallbackImage = "https://lambodragroup.com/wp-content/uploads/2025/12/faqleftsidepic-new.png";

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side FAQ Graphic Image */}
          <div className="flex justify-center">
            <img
              src={content.faq.leftImageUrl || fallbackImage}
              alt="Need Help FAQ"
              className="max-w-full h-auto object-contain drop-shadow-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>

          {/* Right Side FAQ Accordion List */}
          <div className="space-y-6">
            
            {/* Eyebrow Header */}
            <div className="flex items-center gap-2 text-[#fe7d05] font-semibold text-sm">
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-3 w-auto" />
              <span className="tracking-wide uppercase text-xs font-bold">{content.faq.eyebrow}</span>
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-3 w-auto" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              {content.faq.title}
            </h2>

            {/* Accordion Questions (Exact Original 5 Questions) */}
            <div className="space-y-3 pt-2">
              {content.faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#fe7d05] shadow-md bg-orange-50/20"
                        : "border-slate-200/90 hover:border-slate-300 bg-white shadow-xs"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center gap-3.5 font-bold text-slate-900 hover:text-[#fe7d05] transition-colors text-base"
                    >
                      {/* Left Plus / Minus Sign */}
                      <span className={`text-lg font-bold shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-[#fe7d05] text-white" : "text-slate-500 bg-slate-100"
                      }`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>

                      <span className="leading-snug">{item.q}</span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pl-14 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-orange-100/60 pt-3 animate-in fade-in duration-200">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
