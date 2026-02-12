import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SystemSection from "@/components/SystemSection";
import CoursesSection from "@/components/CoursesSection";
import DashboardMockup from "@/components/DashboardMockup";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpansionSection from "@/components/ExpansionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SystemSection />
      <CoursesSection />
      <DashboardMockup />
      <TestimonialsSection />
      <ExpansionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
