import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useSiteContent } from "@/components/SiteContentProvider";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const { content } = useSiteContent();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "GPS Vehicle Tracking",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newSubmission = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceCategory: formData.serviceCategory,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("lambodra_contact_submissions") || "[]");
      localStorage.setItem("lambodra_contact_submissions", JSON.stringify([newSubmission, ...existing]));
    } catch (storageErr) {
      console.warn("Storage warning:", storageErr);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message received! A Lambodra Group representative will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", serviceCategory: "GPS Vehicle Tracking", message: "" });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Banner */}
        <section className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Mail className="h-3.5 w-3.5" />
              {content.contact.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {content.contact.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {content.contact.subtitle}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Office Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Ghana Headquarters</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Address</div>
                      <div className="text-slate-600 text-xs">{content.contact.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Phone Support</div>
                      <a href={`tel:${content.contact.phone}`} className="text-blue-600 font-semibold text-xs hover:underline">
                        {content.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Email Contact</div>
                      <a href={`mailto:${content.contact.email}`} className="text-blue-600 font-semibold text-xs hover:underline">
                        {content.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Working Hours</div>
                      <div className="text-slate-600 text-xs">{content.contact.workingHours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA Banner */}
              <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-md space-y-2">
                <div className="flex items-center gap-2 font-bold text-white text-base">
                  <ShieldCheck className="h-5 w-5 text-orange-400" />
                  <span>24/7 SLA Technical Support</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Existing enterprise contract clients can reach our dedicated on-call network & tracking helpdesk anytime.
                </p>
              </div>
            </div>

            {/* Contact Form & Map (2 Cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Form */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                    Send Us a Direct Message
                  </h2>
                  <p className="text-xs text-slate-500">Fill out this form and our sales & engineering team will reply within 2 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Interested Solution *</label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="GPS Vehicle Tracking">GPS Vehicle Tracking & Fuel Sensors</option>
                        <option value="Sophos & FortiGate">Sophos & FortiGate Cybersecurity</option>
                        <option value="Fugen ERP Software">Fugen ERP & SAP Solutions</option>
                        <option value="CCTV & Access Control">CCTV & Biometric Access Doors</option>
                        <option value="Cloud Calling VOIP">Cloud Calling & Virtual PABX</option>
                        <option value="Web & Custom Software">Web & Custom Software Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your business requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-blue-600 text-white font-extrabold text-sm rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Google Maps Frame */}
              <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm overflow-hidden h-80">
                <iframe
                  title="Lambodra Group Ghana Office"
                  src={content.contact.mapEmbedUrl}
                  className="w-full h-full rounded-2xl border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
