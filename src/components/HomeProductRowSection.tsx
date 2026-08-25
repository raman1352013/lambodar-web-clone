import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";

const HomeProductRowSection = () => {
  const { content } = useSiteContent();
  const megaMenu = content.navigation.productsMegaMenu;

  return (
    <section id="home-product-row" className="py-12 md:py-16 bg-[#FFF6EA] border-y border-orange-200/60 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-slate-900">
          
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
                href={`https://api.whatsapp.com/send?phone=233551122233`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg border border-purple-200"
              >
                <img
                  src="https://lambodragroup.com/wp-content/uploads/2025/12/CTA_banner.png"
                  alt="Click Here to Discuss Your Project"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://lambodragroup.com/wp-content/uploads/2025/12/ftrtopbtn.png";
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
