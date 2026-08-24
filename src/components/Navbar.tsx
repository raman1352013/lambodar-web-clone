import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      
      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2 border-b border-slate-200"
          : "bg-white/95 backdrop-blur-sm py-3 border-b border-slate-100"
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={content?.branding?.logoUrl || "https://lambodragroup.com/wp-content/uploads/2025/12/logo-1.png"}
              alt={content?.branding?.brandName || "Lambodra Group"}
              className="h-12 md:h-14 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://lambodragroup.com/wp-content/uploads/2025/12/logo-1.png";
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

              {/* Fullwidth / Large Mega Menu Dropdown Card */}
              {activeDropdown === "products" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-[#FFF5E1] border border-orange-200/80 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-6 text-slate-900 animate-in fade-in slide-in-from-top-2 duration-200">
                  
                  {/* Col 1 */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                        Cloud and Web Solution
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {content.navigation.productsMegaMenu.cloudWeb.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                        Computer Hardware
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {content.navigation.productsMegaMenu.hardware.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 2 */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                        Network & Security
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {content.navigation.productsMegaMenu.networkSecurity.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                        Vehicle Tracking Solution
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {content.navigation.productsMegaMenu.vehicleTracking.map((item, idx) => (
                          <li key={idx}>
                            <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 3 */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                      ERP & Software Solution
                    </h4>
                    <ul className="space-y-1.5 text-sm">
                      {content.navigation.productsMegaMenu.erpSoftware.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 4: Telecom + CTA Banner */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase text-[#fe7d05] tracking-wider border-b border-orange-200 pb-1">
                      Telecommunication Solution
                    </h4>
                    <ul className="space-y-1.5 text-sm">
                      {content.navigation.productsMegaMenu.telecom.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.href} className="hover:text-[#fe7d05] transition-colors block">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <a href={`tel:${content.navigation.topPhone}`} className="block rounded-xl overflow-hidden hover:scale-105 transition-transform shadow">
                        <img
                          src="https://lambodragroup.com/wp-content/uploads/2025/12/CTA_banner.png"
                          alt="Call CTA"
                          className="w-full h-auto object-cover"
                        />
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Brand Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("brand")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/brand"
                className="flex items-center gap-1 text-base font-medium text-slate-900 hover:text-[#fe7d05] transition-colors py-2"
              >
                <span>Brand</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#fe7d05]" />
              </Link>

              {activeDropdown === "brand" && (
                <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {content.navigation.brandDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#fe7d05] rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about"
                className="flex items-center gap-1 text-base font-medium text-slate-900 hover:text-[#fe7d05] transition-colors py-2"
              >
                <span>About Us</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#fe7d05]" />
              </Link>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {content.navigation.aboutDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#fe7d05] rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/internship"
              className={`text-base font-medium transition-colors hover:text-[#fe7d05] ${
                location.pathname === "/internship" ? "text-[#fe7d05] font-semibold" : "text-slate-900"
              }`}
            >
              Internship
            </Link>

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
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#fe7d05]" />
              </button>

              {activeDropdown === "login" && (
                <div className="absolute top-full right-0 w-44 bg-white border border-slate-200 rounded-xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {content.navigation.loginDropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#fe7d05] rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-slate-900 hover:text-[#fe7d05]"
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-900 rounded transition-transform ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-slate-900 rounded transition-opacity ${isMobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-slate-900 rounded transition-transform ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-5 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 font-medium text-slate-900">
            <Link to="/" className="p-2 hover:text-[#fe7d05]">Home</Link>
            <Link to="/about" className="p-2 hover:text-[#fe7d05]">About Us</Link>
            <Link to="/brand" className="p-2 hover:text-[#fe7d05]">Brand</Link>
            <Link to="/internship" className="p-2 hover:text-[#fe7d05]">Internship</Link>
            <Link to="/contact" className="p-2 hover:text-[#fe7d05]">Contact Us</Link>
            
            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs font-bold uppercase text-[#fe7d05] mb-2">Our Offerings</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link to="/services/web-solution" className="p-1.5 hover:text-[#fe7d05]">Web Solution</Link>
                <Link to="/services/sophos" className="p-1.5 hover:text-[#fe7d05]">Sophos</Link>
                <Link to="/services/fleet-hunt" className="p-1.5 hover:text-[#fe7d05]">GPS Tracking</Link>
                <Link to="/services/customized-erp-solution" className="p-1.5 hover:text-[#fe7d05]">Fugen ERP</Link>
                <Link to="/services/cloud-calling-solution" className="p-1.5 hover:text-[#fe7d05]">Cloud Calling</Link>
                <Link to="/products/it-hardware" className="p-1.5 hover:text-[#fe7d05]">IT Hardware</Link>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <Link to="/contact" className="w-full block py-3 bg-[#fe7d05] text-white text-center font-bold rounded-xl shadow">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
