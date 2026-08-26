import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useSiteContent } from "@/components/SiteContentProvider";
import { submitContactToSanity } from "@/lib/sanity";
import { Mail, Phone, MapPin, CheckSquare } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const { content } = useSiteContent();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    recaptchaChecked: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recaptchaChecked) {
      toast.error("Please verify reCAPTCHA check before submitting.");
      return;
    }
    setIsSubmitting(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const newSubmission = {
      id: Date.now().toString(),
      name: fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    // 1. Save to LocalStorage fallback
    try {
      const existing = JSON.parse(localStorage.getItem("lambodra_contact_submissions") || "[]");
      localStorage.setItem("lambodra_contact_submissions", JSON.stringify([newSubmission, ...existing]));
    } catch (storageErr) {
      console.warn("Storage warning:", storageErr);
    }

    // 2. Submit to Sanity Studio CMS
    try {
      await submitContactToSanity({
        name: fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
    } catch (sanityErr) {
      console.warn("Sanity API error:", sanityErr);
    }

    setIsSubmitting(false);
    toast.success("Thank you! Your message has been sent successfully.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      recaptchaChecked: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* Top Bright Orange Banner (Exact Match with Original Screenshot) */}
        <section className="bg-[#fe6b00] text-white py-14 shadow-sm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Main Content Area (2 Columns) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Have Any Questions & Contact Details */}
              <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-4">
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-[#fe6b00]">
                    Have any Questions?
                  </h2>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Our team is ready to assist you with any inquiries.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl border border-orange-200 bg-orange-50 text-[#fe6b00] flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Email</h3>
                      <a href={`mailto:${content.contact.email}`} className="text-[#fe6b00] font-semibold text-sm hover:underline">
                        {content.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Contact Us */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl border border-orange-200 bg-orange-50 text-[#fe6b00] flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Contact Us</h3>
                      <a href={`tel:${content.contact.phone.replace(/\s+/g, "")}`} className="text-[#fe6b00] font-semibold text-sm hover:underline">
                        {content.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl border border-orange-200 bg-orange-50 text-[#fe6b00] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Office Location</h3>
                      <p className="text-[#fe6b00] font-semibold text-sm leading-relaxed max-w-xs">
                        {content.contact.address}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Exact Contact Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#fe6b00] placeholder-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#fe6b00] placeholder-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#fe6b00] placeholder-slate-400 bg-white"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#fe6b00] placeholder-slate-400 bg-white"
                    />
                  </div>

                  {/* Your Message */}
                  <div>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#fe6b00] placeholder-slate-400 bg-white resize-none"
                    />
                  </div>

                  {/* reCAPTCHA Checkbox Widget */}
                  <div className="pt-2">
                    <div 
                      onClick={() => setFormData({ ...formData, recaptchaChecked: !formData.recaptchaChecked })}
                      className="inline-flex items-center gap-3 p-3.5 border border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer select-none"
                    >
                      <div className={`h-6 w-6 rounded border border-slate-400 flex items-center justify-center transition-colors ${
                        formData.recaptchaChecked ? "bg-[#fe6b00] border-[#fe6b00] text-white" : "bg-white"
                      }`}>
                        {formData.recaptchaChecked && <CheckSquare className="h-4 w-4" />}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">I'm not a robot</span>
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA" 
                        className="h-6 w-auto ml-4 opacity-75 object-contain"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#fe6b00] text-white font-extrabold text-base tracking-wider uppercase rounded-lg shadow-md hover:bg-orange-600 transition-colors"
                    >
                      {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom Full-width Google Map Embed (Matching Original) */}
        <section className="w-full h-[400px] border-t border-slate-200">
          <iframe
            title="Lambodra Group Ghana Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.612087!2d-0.1030!3d5.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzcnMjQuMiJOIDDCsDA2JzEwLjgiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
