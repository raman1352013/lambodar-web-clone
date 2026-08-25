import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const { content } = useSiteContent();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans px-3 sm:px-4 pt-3">
      
      {/* Floating Rounded Navbar Shell */}
      <nav className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl ${
        isScrolled
          ? "bg-white shadow-lg border border-slate-200 py-2"
          : "bg-white/95 backdrop-blur-md shadow-md border border-slate-100 py-3"
      }`}>
        <div className="px-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={content?.branding?.logoUrl || "https://lambodragroup.com/wp-content/uploads/2025/12/logo.png"}
              alt={content?.branding?.brandName || "Lambodra Group"}
              className="h-12 md:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/logo.png";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              Home
            </Link>

            {/* Products Mega Menu Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#products"
                className="flex items-center gap-1 text-base font-medium text-slate-900 hover:text-[#fe7d05] transition-colors py-2"
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#fe7d05] transition-colors" />
              </a>

              {/* Fullwidth / Large Mega Menu Dropdown Card matching Screenshot 2 */}
              {activeDropdown === "products" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1050px] max-w-[95vw] bg-[#FFF6EA] border border-orange-200/90 rounded-3xl shadow-2xl p-7 grid grid-cols-4 gap-6 text-slate-900 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  
                  {/* Col 1: Cloud & Web + Hardware */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                        Cloud and Web Solution
                      </div>
                      <ul className="space-y-2 text-sm pl-1">
                        {content.navigation.productsMegaMenu.cloudWeb.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
                            <span className="text-[#fe6b00] text-sm font-bold">•</span>
                            <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                        Computer Hardware
                      </div>
                      <ul className="space-y-2 text-sm pl-1">
                        {content.navigation.productsMegaMenu.hardware.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
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
                      <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                        Network & Security
                      </div>
                      <ul className="space-y-2 text-sm pl-1">
                        {content.navigation.productsMegaMenu.networkSecurity.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
                            <span className="text-[#fe6b00] text-sm font-bold">•</span>
                            <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                        Vehicle Tracking Solution
                      </div>
                      <ul className="space-y-2 text-sm pl-1">
                        {content.navigation.productsMegaMenu.vehicleTracking.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
                            <span className="text-[#fe6b00] text-sm font-bold">•</span>
                            <Link to={item.href} className="hover:text-[#fe6b00] transition-colors">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 3: ERP & Software */}
                  <div className="space-y-3">
                    <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                      ERP & Software Solution
                    </div>
                    <ul className="space-y-2 text-sm pl-1">
                      {content.navigation.productsMegaMenu.erpSoftware.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
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
                      <div className="bg-[#fe6b00] text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center shadow-sm block w-full">
                        Telecommunication Solution
                      </div>
                      <ul className="space-y-2 text-sm pl-1">
                        {content.navigation.productsMegaMenu.telecom.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
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
              )}
            </div>

            {/* Brand Link */}
            <Link
              to="/brand"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/brand" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              Brand
            </Link>

            {/* About Us Link */}
            <Link
              to="/about"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/about" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              About Us
            </Link>

            {/* Internship Link */}
            <Link
              to="/internship"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/internship" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              Internship
            </Link>

            {/* Contact Us Link */}
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/contact" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              Contact Us
            </Link>

            {/* Login Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("login")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-medium text-slate-900 hover:text-[#fe7d05] transition-colors py-2">
                <span>Login</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#fe7d05] transition-colors" />
              </button>

              {activeDropdown === "login" && (
                <div className="absolute top-full right-0 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-2 text-slate-900 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {content.navigation.loginDropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm font-medium hover:bg-orange-50 hover:text-[#fe7d05] rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#fe7d05]"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-current transition-all ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${isMobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>
      </nav>

      {/* Mobile Drawer - matches floating rounded style */}
      {isMobileOpen && (
        <div className="mx-auto max-w-7xl mt-2 lg:hidden bg-white border border-slate-200 rounded-2xl px-4 py-5 space-y-3 shadow-lg max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block text-base font-semibold text-slate-900 hover:text-[#fe7d05]">Home</Link>
          
          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 hover:text-[#fe7d05] py-1"
            >
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180 text-[#fe7d05]" : ""}`} />
            </button>
            {mobileProductsOpen && (
              <div className="pl-3 pt-2 pb-1 space-y-2 text-sm border-l-2 border-orange-300 my-1 bg-orange-50/50 rounded-r-xl">
                <Link to="/services/web-solution" className="block font-medium text-slate-800 hover:text-[#fe7d05]">Web Solution</Link>
                <Link to="/services/sophos" className="block font-medium text-slate-800 hover:text-[#fe7d05]">Sophos Security</Link>
                <Link to="/services/fortigate" className="block font-medium text-slate-800 hover:text-[#fe7d05]">FortiGate Firewall</Link>
                <Link to="/services/customized-erp-solution" className="block font-medium text-slate-800 hover:text-[#fe7d05]">Fugen ERP</Link>
                <Link to="/services/fleet-hunt" className="block font-medium text-slate-800 hover:text-[#fe7d05]">GPS Vehicle Tracking</Link>
                <Link to="/services/cloud-calling-solution" className="block font-medium text-slate-800 hover:text-[#fe7d05]">Cloud Calling VOIP</Link>
              </div>
            )}
          </div>

          <Link to="/brand" className="block text-base font-semibold text-slate-900 hover:text-[#fe7d05]">Brand</Link>
          <Link to="/about" className="block text-base font-semibold text-slate-900 hover:text-[#fe7d05]">About Us</Link>
          <Link to="/internship" className="block text-base font-semibold text-slate-900 hover:text-[#fe7d05]">Internship</Link>
          <Link to="/contact" className="block text-base font-semibold text-slate-900 hover:text-[#fe7d05]">Contact Us</Link>

          {/* Mobile Login Accordion */}
          <div>
            <button
              onClick={() => setMobileLoginOpen(!mobileLoginOpen)}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 hover:text-[#fe7d05] py-1"
            >
              <span>Login</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileLoginOpen ? "rotate-180 text-[#fe7d05]" : ""}`} />
            </button>
            {mobileLoginOpen && (
              <div className="pl-3 pt-2 pb-1 space-y-2 text-sm border-l-2 border-orange-300 my-1 bg-orange-50/50 rounded-r-xl">
                {content.navigation.loginDropdown.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-medium text-slate-800 hover:text-[#fe7d05]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;
