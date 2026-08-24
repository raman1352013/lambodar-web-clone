import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AwardsSection from "@/components/AwardsSection";
import { Shield, Server, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const BrandPage = () => {
  const brandPartners = [
    {
      name: "Sophos Cybersecurity",
      tier: "Gold Certified Partner",
      description: "Next-generation firewalls, Intercept X ransomware prevention, and cloud security management.",
      category: "Cybersecurity",
      slug: "sophos"
    },
    {
      name: "Fortinet FortiGate",
      tier: "Enterprise Tier Partner",
      description: "High-throughput SD-WAN hardware appliances and unified threat management.",
      category: "Network Infrastructure",
      slug: "fortigate"
    },
    {
      name: "Microsoft 365 & Azure",
      tier: "Cloud Solution Provider",
      description: "Corporate Exchange email migration, Teams collaboration, and Azure cloud infrastructure.",
      category: "Cloud Software",
      slug: "microsoft-solution"
    },
    {
      name: "Google Workspace",
      tier: "Business Deployment Partner",
      description: "Custom domain Gmail, Google Drive cloud storage, and security controls.",
      category: "Cloud Software",
      slug: "google-workspace"
    },
    {
      name: "Tally Prime",
      tier: "Authorized ERP Partner",
      description: "Corporate accounting, VAT compliance, multi-user deployment, and custom vouchers.",
      category: "Financial ERP",
      slug: "tally-solutions"
    },
    {
      name: "Dell & HP Enterprise",
      tier: "Server Hardware Partner",
      description: "Enterprise rackmount servers, workstations, SAN storage, and UPS backups.",
      category: "Hardware",
      slug: "it-hardware"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Banner */}
        <section className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Award className="h-3.5 w-3.5" />
              Strategic Brand Ecosystem
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Global Technology Partners
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Lambodra Group partners with the world's most trusted cybersecurity, hardware, and enterprise software OEMs.
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandPartners.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                      {b.category}
                    </span>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {b.tier}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {b.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${b.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>View {b.name} Solutions</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <AwardsSection />
        </div>

      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BrandPage;
