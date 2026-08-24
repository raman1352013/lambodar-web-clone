import { MessageCircle, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSiteContent } from "./SiteContentProvider";

const FloatingButtons = () => {
  const { content } = useSiteContent();
  const [showBadge, setShowBadge] = useState(true);

  const phoneRaw = content?.contact?.phone || "+233 55 11 222 33";
  const phoneClean = phoneRaw.replace(/\s+/g, "");
  const whatsappPhone = content?.supportBanner?.whatsappPhone || "233551122233";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}`;

  return (
    <>
      {/* Side Rotated Purple Contact Us Tab (Matching Image 1) */}
      <Link
        to="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#907cff] hover:bg-[#e05500] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider rounded-t-xl transition-all shadow-2xl origin-bottom-right -rotate-90 hidden sm:block border-t-2 border-x-2 border-white"
      >
        Contact Us
      </Link>

      {/* Floating Action Widgets (Matching Image 1) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Curved "We Are Here!" Badge */}
        {showBadge && (
          <div className="relative bg-white text-[#fe7d05] px-3.5 py-1.5 rounded-full text-xs font-black shadow-xl border border-orange-200 flex items-center gap-1.5 animate-bounce">
            <span className="text-[#0047ab]">We Are Here!</span>
            <button
              onClick={() => setShowBadge(false)}
              className="text-slate-400 hover:text-slate-700 ml-1"
              aria-label="Close message"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}

        {/* WhatsApp Chat Trigger with Unread Count Badge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />

          {/* Unread Count '1' Pill */}
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-600 text-white rounded-full text-[11px] font-black flex items-center justify-center border-2 border-white shadow">
            1
          </span>
        </a>

        {/* Call Icon Button */}
        <a
          href={`tel:${phoneClean}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fe7d05] text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>

      </div>
    </>
  );
};

export default FloatingButtons;
