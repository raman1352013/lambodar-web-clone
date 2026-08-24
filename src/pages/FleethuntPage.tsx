import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Navigation, Fuel, Key, ShieldCheck, Cpu, Smartphone, CheckCircle2, Send, PlayCircle, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const FleethuntPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fleetSize: "1 - 5 Vehicles",
    solution: "GPS Tracking + Fuel Telemetry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      icon: <Navigation className="h-6 w-6 text-blue-600" />,
      title: "Real-Time GPS Map Telemetry",
      description: "Track live vehicle location on interactive Google Maps with route replay and geofence entry/exit alerts."
    },
    {
      icon: <Fuel className="h-6 w-6 text-orange-600" />,
      title: "Ultrasonic Fuel Level Sensors",
      description: "Prevent fuel theft with digital fuel level telemetry sensors reporting exact litres and fuel drain alerts."
    },
    {
      icon: <Key className="h-6 w-6 text-emerald-600" />,
      title: "Remote Engine Cutoff",
      description: "Disable vehicle engine remotely from your smartphone or web dashboard in case of unauthorized movement."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "iOS & Android Mobile Apps",
      description: "Native mobile apps for fleet managers and drivers to receive push alerts and daily trip summaries."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your Fleethunt GPS Demo Request has been received. Our telematics team will contact you.");
      setFormData({ name: "", email: "", phone: "", fleetSize: "1 - 5 Vehicles", solution: "GPS Tracking + Fuel Telemetry", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Fleethunt Hero Banner */}
        <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Navigation className="h-4 w-4" />
              Fleethunt - Ghana's #1 GPS Tracking & Telematics Brand
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Intelligent Fleet Management & Fuel Monitoring Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Protect your trucks, corporate cars, and logistics fleets with live GPS tracking, fuel theft prevention, and remote engine immobilization.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#demo-form"
                className="px-6 py-3.5 rounded-full bg-[#fe7d05] hover:bg-orange-600 text-white font-extrabold text-sm shadow-lg transition-transform hover:scale-105"
              >
                Request Live Demo
              </a>
              <a
                href="https://app.fleethunt.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center gap-2 transition-all"
              >
                <span>Launch Fleethunt Dashboard</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Live Tracking Mock / Features Section */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900">Next-Generation Vehicle Telematics</h2>
              <p className="text-slate-600 text-sm sm:text-base">Built specifically for logistics, transport companies, and corporate fleets operating across Ghana and West Africa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-orange-500/50 transition-all">
                  <div className="p-3 rounded-xl bg-slate-50 inline-block border border-slate-100">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo-form" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl space-y-8">
              <div className="text-center space-y-2 border-b border-slate-100 pb-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Get Fleethunt GPS Installed for Your Fleet</h2>
                <p className="text-sm text-slate-600">Our certified technicians perform mobile door-step installation across Accra, Kumasi, and Tema.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name / Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Gold Coast Haulage Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="fleet@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05]"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Fleet Size *</label>
                    <select
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05] bg-white"
                    >
                      <option value="1 - 5 Vehicles">1 - 5 Vehicles</option>
                      <option value="6 - 20 Vehicles">6 - 20 Vehicles</option>
                      <option value="21 - 50 Vehicles">21 - 50 Vehicles</option>
                      <option value="50+ Enterprise Fleet">50+ Enterprise Fleet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Telematics Requirement</label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05] bg-white"
                  >
                    <option value="Standard Live GPS Tracking">Standard Live GPS Tracking</option>
                    <option value="GPS Tracking + Fuel Telemetry">GPS Tracking + Fuel Telemetry</option>
                    <option value="GPS + Remote Engine Cutoff + Fuel">GPS + Remote Engine Cutoff + Fuel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fleet Notes / Locations</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify vehicle types (e.g. Trucks, Sedans, Buses) or installation timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#fe7d05] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#fe7d05] to-orange-600 text-white font-extrabold text-base rounded-2xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting Request..." : (
                    <>
                      <span>Submit Fleet Quote Request</span>
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

export default FleethuntPage;
