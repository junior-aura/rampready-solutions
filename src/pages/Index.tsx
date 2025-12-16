import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ComparisonSlider from "@/components/ComparisonSlider";
import Specifications from "@/components/Specifications";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <ComparisonSlider />
        <Specifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
