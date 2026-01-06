import { Truck, Package, Container, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "compact",
    title: "Compact Series",
    subtitle: "Light Duty",
    icon: Package,
    focus: "Vans and low obstacles",
    specs: ["Length up to 2m", "No support legs", "Portable & manual operation"],
    cta: "View Compact Ramps",
    link: "#compact-ramps", // Replace with actual e-commerce link
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "standard",
    title: "Standard Series",
    subtitle: "Professional",
    icon: Truck,
    focus: "Pickup trucks and robust industrial obstacles",
    specs: ["Length from 2m to 5m", "2 adjustable support legs", "Professional grade"],
    cta: "View Standard Ramps",
    link: "#standard-ramps", // Replace with actual e-commerce link
    accentColor: "from-accent to-amber-500",
    featured: true,
  },
  {
    id: "heavy-duty",
    title: "Heavy-Duty Series",
    subtitle: "Industrial",
    icon: Container,
    focus: "Large trucks, containers, and high-volume cargo",
    specs: ["5m+ length", "Multiple reinforced support legs", "Maximum load capacity"],
    cta: "View Heavy-Duty Ramps",
    link: "#heavy-duty-ramps", // Replace with actual e-commerce link
    accentColor: "from-primary to-slate-700",
  },
];

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 lg:py-24">
        <div className="container-max">
          {/* Success Message */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Thank you for your interest!
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              To show you the right pricing and specs, which category best fits your operation?
            </p>
          </div>

          {/* Solution Selector Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.link}
                className={`group relative bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  category.featured
                    ? "border-accent scale-[1.02]"
                    : "border-transparent hover:border-accent/50"
                }`}
              >
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.accentColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {category.subtitle}
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                {/* Focus */}
                <p className="text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">Focus:</span> {category.focus}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-8">
                  {category.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={category.featured ? "cta" : "outline"}
                  className="w-full group-hover:gap-4 transition-all"
                >
                  {category.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            ))}
          </div>

          {/* Help Text */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-muted-foreground">
              Not sure which series fits your needs?{" "}
              <a href="tel:+18007267776" className="text-accent hover:underline font-medium">
                Call us at 1-800-RAMP-PRO
              </a>{" "}
              for a free consultation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
