import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const SolutionCategoriesSection = () => {
  const { content } = useSiteContent();
  const items = content.offerings.items;

  // Tripled items array for infinite looping
  const extendedItems = [...items, ...items, ...items];
  
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive breakpoint listener for card counts
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else if (width < 1280) setVisibleCards(3);
      else setVisibleCards(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  // Seamless jump reset when reaching boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= items.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(items.length);
    } else if (currentIndex < items.length) {
      setIsTransitioning(false);
      setCurrentIndex(items.length * 2 - 1);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const activeDotIndex = currentIndex % items.length;

  return (
    <section id="products" className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-3 w-auto" />
            <span className="tracking-wide uppercase text-xs font-bold">{content.offerings.eyebrow}</span>
            <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-3 w-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
            {content.offerings.title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Window */}
          <div className="overflow-hidden py-4">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {extendedItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center h-full group">
                    <div>
                      <div className="h-20 w-20 mx-auto mb-5 flex items-center justify-center">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#fe7d05] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-block w-full py-2.5 rounded-full bg-[#fe7d05] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#e05500] transition-colors"
                      >
                        {item.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Prev / Next Buttons) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 h-11 w-11 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shadow-xl hover:bg-[#e05500] hover:scale-110 transition-all z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 h-11 w-11 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shadow-xl hover:bg-[#e05500] hover:scale-110 transition-all z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(items.length + idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeDotIndex === idx ? "w-8 bg-[#fe7d05]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionCategoriesSection;
