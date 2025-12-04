import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Specifications = () => {
  const specs = [
    {
      category: "Dimensions",
      items: [
        { label: "Extended Length", value: "12 ft (3.66 m)" },
        { label: "Folded Length", value: "2.4 ft (0.73 m)" },
        { label: "Width", value: "36 in (91 cm)" },
        { label: "Folded Height", value: "24 in (61 cm)" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Max Load Capacity", value: "5,000 lbs (2,268 kg)" },
        { label: "Deployment Time", value: "< 60 seconds" },
        { label: "Height Range", value: "36 - 54 in (91 - 137 cm)" },
        { label: "Incline Angle", value: "15° - 25° adjustable" },
      ],
    },
    {
      category: "Construction",
      items: [
        { label: "Frame Material", value: "6061-T6 Aircraft Aluminum" },
        { label: "Surface Material", value: "Anti-slip Diamond Plate" },
        { label: "Roller Type", value: "Heavy-duty Steel Bearings" },
        { label: "Weight", value: "185 lbs (84 kg)" },
      ],
    },
    {
      category: "Safety & Compliance",
      items: [
        { label: "Safety Factor", value: "3:1 minimum" },
        { label: "OSHA Compliant", value: "Yes" },
        { label: "Weather Rating", value: "IP65 (Outdoor Use)" },
        { label: "Warranty", value: "10 Years Limited" },
      ],
    },
  ];

  return (
    <section id="specs" className="section-padding gradient-hero">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header & CTA */}
          <div className="text-primary-foreground lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              Technical Data
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Built to <span className="text-gradient">Perform</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Every specification is engineered for maximum durability, safety, and ease of use. 
              Our ramps exceed industry standards across the board.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-foreground/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-display font-bold text-accent">10yr</div>
                <div className="text-sm text-primary-foreground/70">Warranty</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-display font-bold text-accent">3:1</div>
                <div className="text-sm text-primary-foreground/70">Safety Factor</div>
              </div>
            </div>

            {/* Download Button */}
            <Button variant="hero-outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Full Spec Sheet
              <FileText className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Column - Specifications Accordion */}
          <div className="bg-card rounded-2xl p-6 shadow-xl">
            <Accordion type="single" collapsible defaultValue="Dimensions" className="space-y-4">
              {specs.map((specGroup) => (
                <AccordionItem
                  key={specGroup.category}
                  value={specGroup.category}
                  className="border border-border rounded-xl px-4 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="font-display font-semibold text-lg hover:no-underline">
                    {specGroup.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      {specGroup.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                        >
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-semibold text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
