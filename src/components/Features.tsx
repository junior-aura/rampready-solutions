import { 
  FoldVertical, 
  Zap, 
  Weight, 
  Shield, 
  Cog, 
  ArrowUpDown 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FoldVertical,
      title: "Compact Storage",
      description: "Accordion-style folding reduces footprint by 80%. Store multiple units in the space of one traditional ramp.",
    },
    {
      icon: Zap,
      title: "Quick Deployment",
      description: "From storage to operational in under 60 seconds. No tools required, single-person operation.",
    },
    {
      icon: Weight,
      title: "Heavy Load Capacity",
      description: "Engineered to handle up to 5,000 lbs. Perfect for pallets, equipment, and heavy cargo.",
    },
    {
      icon: Shield,
      title: "Durable Aluminum",
      description: "Aircraft-grade aluminum construction. Corrosion-resistant, weather-proof, built to last decades.",
    },
    {
      icon: Cog,
      title: "Integrated Rollers",
      description: "Built-in roller conveyors reduce friction and effort. Smooth material flow in both directions.",
    },
    {
      icon: ArrowUpDown,
      title: "Adjustable Height",
      description: "Multiple height settings adapt to any dock or truck bed. Universal compatibility guaranteed.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Why Choose RampPro
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engineered for{" "}
            <span className="text-gradient">Maximum Efficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed to save time, reduce labor costs, and improve safety 
            in your material handling operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/5 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
