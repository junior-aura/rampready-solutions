import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ramp.jpg";

const Hero = () => {
  const benefits = [
    "Deploys in under 60 seconds",
    "5,000+ lbs load capacity",
    "Compact storage footprint",
  ];

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial foldable ramp in warehouse"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-max section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Industry-Leading Innovation
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
              Heavy-Duty Power.{" "}
              <span className="text-gradient">Compact Storage.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-up delay-200">
              The revolutionary foldable aluminum ramp that transforms your loading operations. 
              Deploy in seconds, store in inches, handle tons with ease.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8 animate-fade-up delay-300">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#video">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up delay-500">
              <p className="text-sm text-primary-foreground/60 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <span className="font-display font-semibold text-lg">Amazon</span>
                <span className="font-display font-semibold text-lg">FedEx</span>
                <span className="font-display font-semibold text-lg">UPS</span>
                <span className="font-display font-semibold text-lg">DHL</span>
              </div>
            </div>
          </div>

          {/* Hero Visual / Video Placeholder */}
          <div className="relative hidden lg:block animate-fade-up delay-300">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={heroImage}
                alt="Foldable ramp demonstration"
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer group">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl animate-float">
              <div className="text-3xl font-display font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground">lbs capacity</div>
            </div>

            {/* Floating Feature Card */}
            <div className="absolute -top-4 -right-4 bg-accent p-4 rounded-xl shadow-xl animate-float delay-200">
              <div className="text-2xl font-display font-bold text-accent-foreground">60s</div>
              <div className="text-sm text-accent-foreground/80">deployment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
