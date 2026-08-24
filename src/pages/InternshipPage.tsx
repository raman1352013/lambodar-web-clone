import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useSiteContent } from "@/components/SiteContentProvider";
import { Briefcase, Upload, CheckCircle2, Send, MapPin, Clock, Award } from "lucide-react";
import { toast } from "sonner";

const InternshipPage = () => {
  const { content } = useSiteContent();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: content.internships.openings[0]?.title || "",
    education: "",
    coverLetter: "",
    resumeFile: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resumeFile: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const application = {
      id: Date.now().toString(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      education: formData.education,
      coverLetter: formData.coverLetter,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("lambodra_internship_applications") || "[]");
      localStorage.setItem("lambodra_internship_applications", JSON.stringify([application, ...existing]));
    } catch (storageErr) {
      console.warn("Application storage error:", storageErr);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your Internship Application has been submitted successfully! Our HR team will contact you after screening.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: content.internships.openings[0]?.title || "",
        education: "",
        coverLetter: "",
        resumeFile: null
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Banner */}
        <section className="bg-slate-950 text-white py-16 mb-12 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="h-3.5 w-3.5" />
              {content.internships.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {content.internships.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {content.internships.subtitle}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          
          {/* Current Openings Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Available Internship Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.internships.openings.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">
                      {job.department}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {job.title}
                    </h3>
                    
                    <div className="space-y-1 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-blue-600" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-orange-600" />
                        <span>{job.type} • {job.experience}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {job.description}
                    </p>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-800">Requirements:</div>
                      {job.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="h-3 w-3 text-blue-600 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, position: job.title });
                      window.scrollTo({ top: 900, behavior: "smooth" });
                    }}
                    className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-600 transition-colors"
                  >
                    Apply for this Role
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Application Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8">
            <div className="border-b border-slate-100 pb-6 text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Internship Application Form</h2>
              <p className="text-sm text-slate-600">Fill out your information and upload your CV/Resume to apply.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
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
                    placeholder="your.email@university.edu.gh"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Position *</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    {content.internships.openings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Educational Background / Institution</label>
                <input
                  type="text"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder="e.g. BSc Computer Science - University of Ghana"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Resume File Upload Dropzone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Upload Resume / CV (PDF or DOCX) *</label>
                <div className="border-2 border-dashed border-blue-400/80 bg-blue-50/50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors relative cursor-pointer">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-2">
                    <Upload className="h-8 w-8 text-blue-600 mx-auto" />
                    {formData.resumeFile ? (
                      <div className="text-sm font-bold text-emerald-600 flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Attached: {formData.resumeFile.name}</span>
                      </div>
                    ) : (
                      <>
                        <div className="text-sm font-bold text-slate-800">Click to upload or drag & drop file</div>
                        <div className="text-xs text-slate-500">Maximum file size: 5 MB (PDF, DOCX)</div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Cover Letter / Note</label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us why you'd like to intern at Lambodra Group..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-base rounded-2xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting Application..." : (
                  <>
                    <span>Submit Application</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default InternshipPage;
