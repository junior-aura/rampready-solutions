import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import ComparisonSlider from "@/components/ComparisonSlider";
import Specifications from "@/components/Specifications";
import Applications from "@/components/Applications";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <ComparisonSlider />
        <Specifications />
        <Applications />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
