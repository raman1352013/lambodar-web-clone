import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import HomeProductRowSection from "@/components/HomeProductRowSection";
import SolutionCategoriesSection from "@/components/SolutionCategoriesSection";
import ServiceDetailsTabs from "@/components/ServiceDetailsTabs";
import ServiceDetailSection from "@/components/ServiceDetailSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import SupportBanner from "@/components/SupportBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  useEffect(() => {
    document.title = "Lambodra Group - Enterprise Hardware & Software Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#fe7d05] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <JourneyTimeline />
        <HomeProductRowSection />
        <SolutionCategoriesSection />
        <ServiceDetailsTabs />
        <ServiceDetailSection />
        <WhyChooseUs />
        <FAQSection />
        <SupportBanner />
        <TestimonialsSection />
        <AwardsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
