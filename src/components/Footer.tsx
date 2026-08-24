import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { content } = useSiteContent();

  const whatsappPhone = content?.supportBanner?.whatsappPhone || "233551122233";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}`;
  const phoneRaw = content?.contact?.phone || "+233 55 11 222 33";
  const phoneClean = phoneRaw.replace(/\s+/g, "");
  const email = content?.contact?.email || "info@lambodragroup.com";
  const address = content?.contact?.address || "#213, 1st Floor, Shell Sign Board, Spintex Rd, Accra, Ghana";

  return (
    <footer className="bg-[#ffe4bd] text-slate-900 font-sans relative">
      
      {/* Top Banner Row (Exact Original Asset from lambodragroup.com) */}
      <div className="container mx-auto px-4 pt-6 pb-2 max-w-6xl">
        <div 
          className="relative bg-cover bg-left md:bg-center rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden min-h-[140px]"
          style={{ backgroundImage: `url(https://lambodragroup.com/wp-content/uploads/2025/12/ftrtopbg.png)` }}
        >
          <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-wide drop-shadow-md z-10 pl-2 sm:pl-48">
            Stay Connected With <br className="hidden sm:inline" />
            Cutting Edge IT
          </h3>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 hover:scale-105 transition-transform shrink-0"
          >
            <img
              src="https://lambodragroup.com/wp-content/uploads/2025/12/ftrtopbtn.png"
              alt="Get Started"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="py-12 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Col 1: Logo & Intro */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-full inline-block shadow-sm border border-amber-200">
              <img
                src={content?.footer?.logoUrl || "https://lambodragroup.com/wp-content/uploads/2025/12/logo-1.png"}
                alt="Lambodra Group Logo"
                className="h-20 sm:h-24 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://lambodragroup.com/wp-content/uploads/2025/12/ftrlogo.png";
                }}
              />
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Enterprise hardware, cybersecurity, GPS telematics, and cloud ERP solutions in Ghana & West Africa.
            </p>
          </div>

          {/* Col 2: Web Solution & Network */}
          <div className="space-y-3">
            <h4 className="text-xl font-black text-[#e05500] tracking-tight border-b border-amber-300/60 pb-1">
              Web Solution
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-800">
              <li>
                <Link to="/services/web-solution" className="hover:text-[#fe7d05] transition-colors">
                  Web Solution
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-[#fe7d05] transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>

            <h4 className="text-xl font-black text-[#e05500] tracking-tight border-b border-amber-300/60 pb-1 pt-2">
              Network
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-800">
              <li>
                <Link to="/services/sophos" className="hover:text-[#fe7d05] transition-colors">
                  Sophos
                </Link>
              </li>
              <li>
                <Link to="/services/fortigate" className="hover:text-[#fe7d05] transition-colors">
                  FortiGate
                </Link>
              </li>
              <li>
                <Link to="/services/cctv-solution" className="hover:text-[#fe7d05] transition-colors">
                  CCTV Solution
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Erp Solution */}
          <div className="space-y-3">
            <h4 className="text-xl font-black text-[#e05500] tracking-tight border-b border-amber-300/60 pb-1">
              Erp Solution
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-800">
              <li>
                <Link to="/services/customized-erp-solution" className="hover:text-[#fe7d05] transition-colors">
                  Fugen ERP
                </Link>
              </li>
              <li>
                <Link to="/services/microsoft-solution" className="hover:text-[#fe7d05] transition-colors">
                  Microsoft Solution
                </Link>
              </li>
              <li>
                <Link to="/services/google-workspace" className="hover:text-[#fe7d05] transition-colors">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link to="/services/tally-solutions" className="hover:text-[#fe7d05] transition-colors">
                  Tally Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software-solutions" className="hover:text-[#fe7d05] transition-colors">
                  Custom Software Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-[#e05500] tracking-tight border-b border-amber-300/60 pb-1">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a href={`tel:${phoneClean}`} className="hover:text-[#fe7d05] font-extrabold text-slate-900 text-sm">
                  {phoneRaw}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-[#fe7d05] font-bold text-slate-900 text-xs">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-slate-800 text-xs font-semibold leading-relaxed">
                  {address}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-4 text-center border-t border-slate-800 font-medium">
        {content?.footer?.copyrightText || "© 2026 Lambodra Group. All Rights Reserved."}
      </div>

    </footer>
  );
};

export default Footer;
