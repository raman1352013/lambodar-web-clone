import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSiteContent } from "@/components/SiteContentProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content } = useSiteContent();

  const currentSlug = slug || "web-solution";
  const service = content.serviceList.find((s) => s.slug === currentSlug || s.id === currentSlug) || content.serviceList[0];

  const whatsappUrl = `https://api.whatsapp.com/send?phone=233551122233`;
  const phoneUrl = `tel:233551122233`;

  // Core web capabilities cards data
  const capabilities = [
    {
      title: "Custom Website Development",
      desc: "Strategically built websites aligned with your industry and business objectives.",
      icon: "/images/Live_Monitor.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/Live_Monitor.png",
      points: ["Fully responsive across all devices", "SEO-ready code structure", "Scalable CMS integration"]
    },
    {
      title: "E-Commerce Development",
      desc: "Secure and high-performance online store solutions.",
      icon: "/images/ecommerce-icon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/ecommerce-icon.png",
      points: ["Payment gateway integration", "Inventory & order management", "Optimized checkout experience"]
    },
    {
      title: "UI/UX Design Optimization",
      desc: "Conversion-focused design to improve engagement and usability.",
      icon: "/images/uiuxicon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/uiuxicon.png",
      points: ["Wireframing & prototyping", "Customer journey mapping", "Speed & usability enhancement"]
    },
    {
      title: "SEO-Optimized Architecture",
      desc: "Built with technical SEO foundations to improve search rankings.",
      icon: "/images/websitesecurityicon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/websitesecurityicon.png",
      points: ["Structured schema implementation", "Meta optimization", "Clean URL & sitemap structure"]
    },
    {
      title: "Web Application Development",
      desc: "Custom web-based systems tailored for business automation.",
      icon: "/images/websitedevlpicon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/websitedevlpicon.png",
      points: ["Portal & dashboard development", "CRM integration", "API connectivity"]
    },
    {
      title: "Website Security & Performance",
      desc: "Enterprise-level protection and speed optimization.",
      icon: "/images/websitesecurityicon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/websitesecurityicon.png",
      points: ["SSL & data encryption", "Firewall & malware protection", "CDN & caching integration"]
    },
    {
      title: "Content Management System (CMS)",
      desc: "Easily manage and update website content without technical dependency.",
      icon: "/images/contentmngmnticon.png",
      fallbackIcon: "https://lambodragroup.com/wp-content/uploads/2026/02/contentmngmnticon.png",
      points: ["WordPress & custom CMS", "Role-based access control", "Blog & content publishing tools"]
    }
  ];

  // Industry sectors data
  const industries = [
    { name: "Medical & Healthcare", icon: "/images/healthicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/healthicon.png" },
    { name: "E-Commerce", icon: "/images/ecomerceicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/ecomerceicon.png" },
    { name: "School & Institution", icon: "/images/education-icon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/education-icon.png" },
    { name: "Real Estate", icon: "/images/realestateicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/realestateicon.png" },
    { name: "Manufacturing Industries", icon: "/images/manifactureicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/manifactureicon.png" },
    { name: "Tour & Travel", icon: "/images/tourtravelicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/tourtravelicon.png" },
    { name: "Food & Beverage", icon: "/images/foodicon.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/foodicon.png" },
    { name: "Beauty & Fashion", icon: "/images/beutyfasion.png", fallback: "https://lambodragroup.com/wp-content/uploads/2026/01/beutyfasion.png" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* 1. Top Banner Section matching https://lambodragroup.com/web-solution/ */}
        <section className="w-full bg-[#FFF5E1]">
          <Link to="/contact" className="block w-full">
            {/* Desktop Banner Image */}
            <img
              src="https://lambodragroup.com/wp-content/uploads/2026/03/websolutionBanner_01.png"
              alt="Web Solution Banner | Lambodra Group"
              className="hidden md:block w-full h-auto object-cover max-h-[85vh]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/websolutionBanner_01.png";
              }}
            />
            {/* Mobile Banner Image */}
            <img
              src="https://lambodragroup.com/wp-content/uploads/2026/02/websolutionmobilebanner.png"
              alt="Web Solution Mobile Banner | Lambodra Group"
              className="block md:hidden w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/websolutionmobilebanner.png";
              }}
            />
          </Link>
        </section>

        {/* 2. Problem-Solution Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Text Box */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#fe7d05] font-semibold text-sm">
                  <img src="/images/leftarrow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"; }} />
                  <span className="uppercase text-xs tracking-wider font-bold">Problem–Solution Section</span>
                  <img src="/images/rightaroow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"; }} />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#181b31] leading-tight tracking-tight">
                  Convert Your Website into a Strategic Business Asset
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  A poorly structured website reduces credibility, search visibility, and lead generation. Our web solutions combine performance optimization, SEO architecture, and user-centric design to ensure your website drives measurable business results while maintaining security, scalability, and seamless user experience.
                </p>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  At Lambodra Group, we focus on building high-performing digital platforms that convert visitors into loyal customers.<br />
                  We deliver custom, mobile-responsive, and future-ready websites tailored to your business goals. From strategy to deployment, our team ensures consistent branding, faster load times, and higher engagement.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#907cff] hover:bg-[#e05500] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg transition-all"
                  >
                    <span>Click Here for WhatsApp Chat</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Right Illustration Image */}
              <div className="flex justify-center">
                <img
                  src="https://lambodragroup.com/wp-content/uploads/2026/02/wesolutiontoppic.png"
                  alt="Convert Your Website into a Strategic Business Asset"
                  className="w-full max-w-lg h-auto object-contain rounded-3xl drop-shadow-xl"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/wesolutiontoppic.png";
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* 3. Core Web Capabilities Section */}
        <section className="py-16 md:py-20 bg-[#FFF6EA]">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
                <img src="/images/leftarrow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"; }} />
                <span className="uppercase text-xs tracking-wider font-bold">Core Web Capabilities</span>
                <img src="/images/rightaroow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"; }} />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Advanced Website Development Features for Modern Enterprises
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-orange-200/70 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="h-16 w-16 rounded-2xl bg-orange-50 border border-orange-200 p-3 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-10 w-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = item.fallbackIcon;
                        }}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#0f172a] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-6 mt-4 border-t border-slate-100 space-y-2">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <span className="text-[#fe7d05] text-sm">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Call / WhatsApp CTA Row */}
        <section className="py-10 bg-[#FFD092]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
              
              {/* Call Box */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-orange-300 space-y-3">
                <img
                  src="/images/icon_hand-new.png"
                  alt=""
                  className="h-8 w-auto mx-auto animate-bounce"
                  onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2026/01/icon_hand-new.png"; }}
                />
                <a
                  href={phoneUrl}
                  className="inline-flex items-center gap-3 bg-[#fe7d05] hover:bg-black text-white px-7 py-3 rounded-full font-extrabold text-base shadow-lg transition-all"
                >
                  <Phone className="h-5 w-5 fill-white" />
                  <span>Click Here To Call Us Now</span>
                </a>
              </div>

              {/* WhatsApp Box */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-orange-300 space-y-3">
                <img
                  src="/images/icon_hand-new.png"
                  alt=""
                  className="h-8 w-auto mx-auto animate-bounce"
                  onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2026/01/icon_hand-new.png"; }}
                />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-black text-white px-7 py-3 rounded-full font-extrabold text-base shadow-lg transition-all"
                >
                  <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
                  <span>Click Here For WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Development Framework Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column Text */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#fe7d05] font-semibold text-sm">
                  <img src="/images/leftarrow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"; }} />
                  <span className="uppercase text-xs tracking-wider font-bold">Our Development Framework</span>
                  <img src="/images/rightaroow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"; }} />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
                  How We Deliver Secure and Scalable Web Solutions
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                  Our structured development methodology ensures precision, transparency, and long-term scalability throughout the entire website lifecycle.<br /><br />
                  We follow industry best practices to deliver secure, high-performance solutions tailored to your business goals.<br /><br />
                  From planning and design to deployment and maintenance, every stage is optimized for reliability and growth.<br /><br />
                  This ensures your digital platform remains future-ready, resilient, and capable of evolving with market demands.
                </p>
              </div>

              {/* Right Column Step Cards */}
              <div className="space-y-4">
                {[
                  { step: "01", title: "Requirement Analysis & Business Consultation" },
                  { step: "02", title: "Wireframe Planning & UI/UX Design" },
                  { step: "03", title: "Development & CMS Implementation" },
                  { step: "04", title: "Security Testing & Performance Optimization" },
                  { step: "05", title: "Deployment, Training & Ongoing Support" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#fe7d05] transition-all"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-[#fe7d05] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#fe7d05] uppercase tracking-wider">Step {item.step}</h4>
                      <p className="text-base font-bold text-[#0f172a] leading-snug">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 6. Industry Solutions Section */}
        <section className="py-16 md:py-20 bg-[#FFD092]/30">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <div className="flex items-center justify-center gap-2 text-[#fe7d05] font-semibold text-sm">
                <img src="/images/leftarrow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"; }} />
                <span className="uppercase text-xs tracking-wider font-bold">Industry Solutions</span>
                <img src="/images/rightaroow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"; }} />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Web Solutions Across Multiple Business Sectors
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
                We provide enterprise Web Solution for IT & SaaS companies, healthcare providers, retail chains, logistics firms, call centers, real estate businesses, educational institutions, and corporate enterprises. Our systems support multi-location operations, remote teams, and international communication with centralized management and high reliability.
              </p>
            </div>

            {/* 8 Industry Boxes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-orange-200/90 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="h-10 w-10 object-contain shrink-0"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ind.fallback;
                    }}
                  />
                  <h6 className="text-xs sm:text-sm font-bold text-[#fe7d05] leading-snug">
                    {ind.name}
                  </h6>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. Business Impact Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Graphic Image */}
              <div className="flex justify-center">
                <img
                  src="https://lambodragroup.com/wp-content/uploads/2026/02/websolutionbottompicnew.png"
                  alt="Business Impact"
                  className="w-full max-w-md h-auto object-contain rounded-3xl drop-shadow-xl"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/websolutionbottompicnew.png";
                  }}
                />
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#fe7d05] font-semibold text-sm">
                  <img src="/images/leftarrow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png"; }} />
                  <span className="uppercase text-xs tracking-wider font-bold">Business Impact</span>
                  <img src="/images/rightaroow.png" alt="" className="h-3 w-auto" onError={(e) => { e.currentTarget.src = "https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png"; }} />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                  Benefits of Choosing Lambodra Web Development Services
                </h2>

                <p className="text-slate-700 text-base leading-relaxed">
                  A professionally developed website strengthens brand credibility and creates measurable digital growth. Our solutions are engineered for performance, security, and conversion.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Improved Google search rankings",
                    "Higher lead generation & conversion",
                    "Stronger online brand positioning",
                    "Scalable infrastructure for growth",
                    "Long-term maintenance & support"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-800">
                      <CheckCircle2 className="h-5 w-5 text-[#fe7d05] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Bottom CTA Banner Row */}
        <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Contact us now to discuss your requirements and receive a customized plan tailored to your business needs.
            </h3>
            
            <div className="pt-2 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img
                  src="https://lambodragroup.com/wp-content/uploads/2025/12/letstalkbtn.png"
                  alt="Let's Talk"
                  className="h-14 sm:h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/letstalkbtn.png";
                  }}
                />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetailPage;
