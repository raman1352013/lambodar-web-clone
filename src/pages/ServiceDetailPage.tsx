import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSiteContent } from "@/components/SiteContentProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Phone, 
  Mail, 
  Globe, 
  Server, 
  Cpu, 
  ChevronRight,
  Layers
} from "lucide-react";
import { toast } from "sonner";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content } = useSiteContent();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find matching service or product from data
  const service = content.serviceList.find((s) => s.slug === slug || s.id === slug) || 
    content.serviceList[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your solution inquiry has been submitted. Our engineering team in Ghana will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/60" />
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/#services" 
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Solutions
            </Link>

            <div className="max-w-4xl space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                {service.category} Division
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {service.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Content Body Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (2 Cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Image banner */}
              {service.imageUrl && (
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-80 sm:h-96">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Detailed Description */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Solution Overview</h2>
                <p className="text-slate-700 leading-relaxed text-base">
                  {service.fullDescription || service.shortDescription}
                </p>
              </div>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">Key Features & Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-md space-y-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-orange-400" />
                    Business Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-blue-700/50 text-xs sm:text-sm font-medium text-slate-200">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar Inquiry Form */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md sticky top-28 space-y-5">
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900">Request Solution Quote</h3>
                  <p className="text-xs text-slate-500">Inquire about {service.title} for your company.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="kwame@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 50 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Gold Coast Logistics"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Requirements / Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, fleet size, or specs..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-blue-600" />
                    <span>Direct Call: +233 (0) 50 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    <span>Email: sales@lambodragroup.com</span>
                  </div>
                </div>

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

export default ServiceDetailPage;
