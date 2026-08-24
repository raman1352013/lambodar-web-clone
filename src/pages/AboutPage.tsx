import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JourneyTimeline from "@/components/JourneyTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import AwardsSection from "@/components/AwardsSection";
import { ShieldCheck, Award, Users, CheckCircle2, Building2 } from "lucide-react";
import { useSiteContent } from "@/components/SiteContentProvider";

const AboutPage = () => {
  const { content } = useSiteContent();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* About Hero Banner */}
        <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/60" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              {content.about.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {content.about.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {content.about.description}
            </p>
          </div>
        </section>

        {/* Story & Highlights Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase">
                  Pioneering Tech in West Africa
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  Over a Decade of Engineering Integrity & Corporate Growth
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Founded with a vision to deliver enterprise-grade hardware, cybersecurity, and telematics to businesses in Ghana, Lambodra Group has grown into a trusted technology partner for over 700+ commercial clients.
                </p>

                <div className="space-y-3 pt-2">
                  {content.about.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{h.title}</div>
                        <div className="text-xs text-slate-600">{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                  <Building2 className="w-48 h-48" />
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10">Corporate Core Values</h3>
                
                <div className="space-y-4 relative z-10 text-sm">
                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="font-bold text-white">Security First</div>
                    <div className="text-xs text-slate-400">Zero-compromise protection for corporate data and vehicle fleets.</div>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4 py-1">
                    <div className="font-bold text-white">Client Operational Uptime</div>
                    <div className="text-xs text-slate-400">Rapid response SLAs and 24/7 technical helpdesk assistance.</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4 py-1">
                    <div className="font-bold text-white">Innovation & Partnership</div>
                    <div className="text-xs text-slate-400">Official tier partnerships with global leaders like Sophos and Fortinet.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Growth Timeline */}
        <JourneyTimeline />

        {/* Operational Pillars */}
        <WhyChooseUs />

        {/* Media & News Section */}
        <section id="media" className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                Press & Coverage
              </div>
              <h2 className="text-3xl font-extrabold text-white">Lambodra Group in the Media</h2>
              <p className="text-slate-400 text-sm">Recognized by West African business summits, entrepreneurship forums, and technology publications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
                <span className="text-xs font-bold text-orange-400">GHANA BUSINESS AWARDS 2024</span>
                <h3 className="text-lg font-bold text-white leading-snug">Lambodra Group Honored as Best Software & Telematics Enterprise</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Recognized for outstanding technological innovation and deployment of GPS fleet management across Ghana and Nigeria.</p>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
                <span className="text-xs font-bold text-blue-400">ENTREPRENEUR SUMMIT 2023</span>
                <h3 className="text-lg font-bold text-white leading-snug">CEO Awarded Innovative Tech Leader of the Year</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Celebrating over a decade of continuous expansion in IT hardware distribution, network security, and VOIP services.</p>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
                <span className="text-xs font-bold text-emerald-400">GLOBAL EXPANSION NEWS</span>
                <h3 className="text-lg font-bold text-white leading-snug">Strategic Expansion into UAE, Zambia & Canada Markets</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Expanding enterprise cloud footprint, hardware supply chain, and IT maintenance operations across three continents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Social Responsibility (CSR) Section */}
        <section id="csr" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Giving Back
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">Corporate Social Responsibility (CSR)</h2>
              <p className="text-slate-600 text-sm">Empowering local communities in Ghana through youth tech education, digital literacy, and sustainable enterprise initiatives.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">01</div>
                <h3 className="text-xl font-bold text-slate-900">Digital Skills Training & Internship Programs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Providing free hands-on software development, networking, and IT hardware maintenance internships for Ghanaian university graduates every year.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">02</div>
                <h3 className="text-xl font-bold text-slate-900">Community Computer Labs & Equipment Donations</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Donating refurbished IT hardware, desktop systems, and internet connectivity setup to schools and community learning centers in Accra and rural regions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <AwardsSection />

      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;

