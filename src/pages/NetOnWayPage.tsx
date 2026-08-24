import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Wifi, ShieldCheck, Zap, Server, CheckCircle2, Send, Phone, Mail, Globe } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const NetOnWayPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    plan: "Corporate Fiber 100 Mbps",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const plans = [
    {
      name: "Business Starter Fiber",
      speed: "50 Mbps Unlimited",
      price: "Ideal for SME Offices",
      features: ["Symmetrical Upload/Download", "99.9% Dedicated SLA", "24/7 Managed Router Support", "Free Static IP Address"],
      recommended: false
    },
    {
      name: "Corporate Enterprise Fiber",
      speed: "100 Mbps Unlimited",
      price: "Most Popular for Corporate",
      features: ["Low Latency Fiber Trunk", "1:1 Dedicated Bandwidth", "24/7 Priority Engineer Hotline", "2 Static IPv4 Addresses"],
      recommended: true
    },
    {
      name: "Dedicated Fiber Trunk",
      speed: "500+ Mbps Custom",
      price: "For Data Centers & Large Ops",
      features: ["Custom Fiber Redundancy Loop", "BGP Peering Support", "Direct Cloud Connect", "Dedicated Account Manager"],
      recommended: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your NetOnWay ISP connectivity request has been submitted. Our network team will conduct a feasibility check.");
      setFormData({ name: "", email: "", phone: "", location: "", plan: "Corporate Fiber 100 Mbps", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* NetOnWay Hero Banner */}
        <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950 opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Wifi className="h-4 w-4" />
              NetOnWay ISP - High-Speed Enterprise Fiber Internet
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Uninterrupted Business Internet & Dedicated Fiber in Ghana
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Powering enterprises, financial institutions, and commercial centers with high-speed fiber optics, low latency, and guaranteed uptime.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ultra-Low Latency</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  High-speed fiber trunks optimized for seamless VoIP, video conferencing, cloud apps, and ERP database synchronization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">99.9% Service SLA</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Redundant backhaul infrastructure ensures maximum operational uptime for your critical corporate infrastructure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Managed Routers & Static IP</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enterprise router hardware, static public IPv4 allocations, and 24/7 proactive network monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internet Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">NetOnWay Corporate Fiber Packages</h2>
              <p className="text-slate-600 text-sm sm:text-base">Choose the internet bandwidth capacity designed for your organizational workforce.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-8 border transition-all flex flex-col justify-between relative ${
                    plan.recommended
                      ? "border-blue-600 shadow-2xl ring-2 ring-blue-600/20"
                      : "border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      Most Recommended
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                      <div className="text-2xl font-black text-blue-600 mt-2">{plan.speed}</div>
                      <div className="text-xs text-slate-500 font-semibold mt-1">{plan.price}</div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, plan: plan.name });
                      window.scrollTo({ top: 1100, behavior: "smooth" });
                    }}
                    className={`mt-8 w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                      plan.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                        : "bg-slate-900 text-white hover:bg-blue-600"
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectivity Form */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
              <div className="text-center space-y-2 border-b border-slate-100 pb-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Check Fiber Feasibility at Your Building</h2>
                <p className="text-sm text-slate-600">Submit your address in Ghana for instant network coverage verification.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Accra Corporate Center"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="it@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 55 11 222 33"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Office Location / Area in Ghana *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Spintex Rd / Ridge / Airport City, Accra"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Selected Package</label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    {plans.map((p, i) => (
                      <option key={i} value={p.name}>{p.name} ({p.speed})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Special Network Notes</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention specific requirements e.g. Static IPs, VPN setup, Multi-floor cabling..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-base rounded-2xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Checking Coverage..." : (
                    <>
                      <span>Request Feasibility Survey</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default NetOnWayPage;
