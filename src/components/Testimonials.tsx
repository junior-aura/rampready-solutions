import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The RampPro has transformed our loading operations. We've cut setup time by 75% and our team can handle more shipments per day.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "Pacific Logistics Inc.",
      rating: 5,
    },
    {
      quote: "Finally, a ramp that doesn't take up half our warehouse when not in use. The space savings alone justified the investment.",
      author: "Sarah Martinez",
      role: "Warehouse Manager",
      company: "Midwest Distribution Co.",
      rating: 5,
    },
    {
      quote: "We've tried other foldable ramps, but nothing compares to the build quality and ease of use. Our drivers love it.",
      author: "David Thompson",
      role: "Fleet Manager",
      company: "Express Freight Solutions",
      rating: 5,
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    "OSHA Compliant",
    "CE Certified",
    "ANSI/ITSDF B56.1",
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why operations managers across the country choose RampPro for their material handling needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Industry Certifications
            </h3>
            <p className="text-muted-foreground">
              Meeting and exceeding global safety and quality standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl shadow-sm"
              >
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="font-semibold text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
