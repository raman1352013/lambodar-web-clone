import { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "./SiteContentProvider";

const ServiceDetailsTabs = () => {
  const { content } = useSiteContent();
  const { serviceDetails } = content;

  const tabs = serviceDetails?.tabs ?? [];
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) return null;

  const active = tabs[activeTab];

  return (
    <section className="py-20 bg-slate-50 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
            <img
              src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"
              alt=""
              className="h-3 w-auto"
            />
            <span className="tracking-wide uppercase text-xs font-bold">
              {serviceDetails.eyebrow}
            </span>
            <img
              src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"
              alt=""
              className="h-3 w-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
            {serviceDetails.title}
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                idx === activeTab
                  ? "bg-[#fe7d05] text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#fe7d05] hover:text-[#fe7d05]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{active.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{active.description}</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {active.subItems.map((sub) => (
                <li key={sub.label}>
                  <Link
                    to={sub.href}
                    className="flex items-center gap-2 text-slate-700 font-medium hover:text-[#fe7d05] transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe7d05]" />
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={active.imageUrl}
              alt={active.title}
              className="w-full max-w-md rounded-2xl object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsTabs;
