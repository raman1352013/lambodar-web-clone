import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { content } = useSiteContent();

  const whatsappPhone = content?.supportBanner?.whatsappPhone || "233551122233";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}`;
  const phoneRaw = content?.contact?.phone || "+233 55 11 222 33";
  const phoneClean = phoneRaw.replace(/\s+/g, "");
  const email = content?.contact?.email || "info@lambodragroup.com";
  const address = content?.contact?.address || "#213,1st Floor, Shell Sign Board, Spintex Rd, Accra, Ghana";

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
          
          {/* Col 1: Logo */}
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

          {/* Col 2: Web Solution */}
          <div className="space-y-3">
            <h4 className="text-2xl font-black text-[#e05500] tracking-tight">
              Web Solution
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-slate-800">
              <li>
                <Link to="/services/web-solution" className="hover:text-[#fe7d05] transition-colors">
                  Web Solution
                </Link>
              </li>
              <li>
                <Link to="/services/network-security" className="hover:text-[#fe7d05] transition-colors">
                  Network & Security
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-calling" className="hover:text-[#fe7d05] transition-colors">
                  Cloud Calling VoIP
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Erp Solution */}
          <div className="space-y-3">
            <h4 className="text-2xl font-black text-[#e05500] tracking-tight">
              Erp Solution
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-slate-800">
              <li>
                <Link to="/services/erp-software" className="hover:text-[#fe7d05] transition-colors">
                  Fugen Erp
                </Link>
              </li>
              <li>
                <Link to="/services/tally-solutions" className="hover:text-[#fe7d05] transition-colors">
                  Tally Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/microsoft-solution" className="hover:text-[#fe7d05] transition-colors">
                  Microsoft 365
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-[#e05500] tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <a href={`tel:${phoneClean}`} className="hover:text-[#fe7d05] font-extrabold text-slate-900 text-base">
                  {phoneRaw}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-[#fe7d05] font-bold text-slate-900 text-sm">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-[#fe7d05] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="h-4 w-4" />
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
