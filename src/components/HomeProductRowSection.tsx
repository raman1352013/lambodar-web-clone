import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";
import { ChevronDown, ChevronUp } from "lucide-react";

const HomeProductRowSection = () => {
  const { content } = useSiteContent();
  const megaMenu = content.navigation.productsMegaMenu;

  // Track expanded mobile categories
  const [openMobileCat, setOpenMobileCat] = useState<string | null>(null);

  const toggleMobileCat = (catKey: string) => {
    setOpenMobileCat(openMobileCat === catKey ? null : catKey);
  };

  const categories = [
    {
      key: "cloudWeb",
      title: "Cloud and Web Solution",
      items: megaMenu.cloudWeb,
    },
    {
      key: "hardware",
      title: "Computer Hardware",
      items: megaMenu.hardware,
    },
    {
      key: "networkSecurity",
      title: "Network & Security",
      items: megaMenu.networkSecurity,
    },
    {
      key: "vehicleTracking",
      title: "Vehicle Tracking Solution",
      items: megaMenu.vehicleTracking,
    },
    {
      key: "erpSoftware",
      title: "ERP & Software Solution",
      items: megaMenu.erpSoftware,
    },
    {
      key: "telecom",
      title: "Telecommunication Solution",
      items: megaMenu.telecom,
    },
  ];

  return (
    <section id="products" className="py-10 md:py-16 bg-[#FFF6EA] border-y border-orange-200/60 font-sans scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Mobile Accordion View (screens < 640px) */}
        <div className="block sm:hidden space-y-3">
          <div className="text-center mb-6">
            <span className="text-[#fe6b00] font-extrabold text-xs uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200">
              Our Products & Solutions
            </span>
          </div>

          {categories.map((cat) => {
            const isOpen = openMobileCat === cat.key;
            return (
              <div key={cat.key} className="bg-white rounded-2xl border border-orange-200/80 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleMobileCat(cat.key)}
                  className="w-full px-4 py-3.5 flex items-center justify-between bg-[#fe6b00] text-white font-extrabold text-xs uppercase tracking-wider text-left"
                >
                  <span>{cat.title}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
                </button>

                {isOpen && (
                  <ul className="p-4 space-y-3 bg-[#FFF6EA]/50 animate-in fade-in duration-200">
                    {cat.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-[#fe6b00] transition-colors py-1"
                        >
                          <span className="text-[#fe6b00] font-bold">•</span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          {/* CTA Banner Mobile */}
          <div className="pt-4">
            <a
              href="https://api.whatsapp.com/send?phone=233551122233"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-md border border-purple-200 active:scale-98 transition-transform"
            >
              <img
                src="https://lambodragroup.com/wp-content/uploads/2025/12/CTA_banner.png"
                alt="Discuss Your Project"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/CTA_banner.png";
                }}
              />
            </a>
          </div>
        </div>

        {/* Desktop / Tablet Grid View (screens >= 640px) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-slate-900">
          
          {/* Col 1: Cloud and Web + Hardware */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
                Cloud and Web Solution
              </div>
              <ul className="space-y-2.5 text-sm pl-2">
                {megaMenu.cloudWeb.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                    <span className="text-[#fe6b00] text-sm font-bold">•</span>
                    <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
                Computer Hardware
              </div>
              <ul className="space-y-2.5 text-sm pl-2">
                {megaMenu.hardware.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                    <span className="text-[#fe6b00] text-sm font-bold">•</span>
                    <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2: Network & Security + Vehicle Tracking */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
                Network & Security
              </div>
              <ul className="space-y-2.5 text-sm pl-2">
                {megaMenu.networkSecurity.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                    <span className="text-[#fe6b00] text-sm font-bold">•</span>
                    <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
                Vehicle Tracking Solution
              </div>
              <ul className="space-y-2.5 text-sm pl-2">
                {megaMenu.vehicleTracking.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                    <span className="text-[#fe6b00] text-sm font-bold">•</span>
                    <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: ERP & Software Solution */}
          <div className="space-y-3">
            <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
              ERP & Software Solution
            </div>
            <ul className="space-y-2.5 text-sm pl-2">
              {megaMenu.erpSoftware.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                  <span className="text-[#fe6b00] text-sm font-bold">•</span>
                  <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Telecom + CTA Banner */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="bg-[#fe6b00] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm">
                Telecommunication Solution
              </div>
              <ul className="space-y-2.5 text-sm pl-2">
                {megaMenu.telecom.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#fe6b00] transition-colors">
                    <span className="text-[#fe6b00] text-sm font-bold">•</span>
                    <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <a
                href="https://api.whatsapp.com/send?phone=233551122233"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg border border-purple-200"
              >
                <img
                  src="https://lambodragroup.com/wp-content/uploads/2025/12/CTA_banner.png"
                  alt="Click Here to Discuss Your Project"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/CTA_banner.png";
                  }}
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeProductRowSection;
