import { useState } from "react";
import rampFolded from "@/assets/ramp-folded.jpg";
import rampDeployed from "@/assets/ramp-deployed.jpg";

const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Eficiência de Espaço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Queixo-duro vs. <span className="text-gradient">Ajustável</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Arraste o controle deslizante para ver a diferença drástica entre os estados de armazenamento e operacional.
          </p>
        </div>

        {/* Comparison Container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[4/3] relative">
            {/* Deployed Image (Background) */}
            <img
              src={rampDeployed}
              alt="RampPro fully deployed"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Folded Image (Foreground with clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={rampFolded}
                alt="RampPro folded for storage"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-accent-foreground rounded-full" />
                  <div className="w-0.5 h-4 bg-accent-foreground rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 rounded-lg">
              <span className="text-primary-foreground font-semibold text-sm">Concorrente</span>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent/90 rounded-lg">
              <span className="text-accent-foreground font-semibold text-sm">Auratec</span>
            </div>

            {/* Invisible Range Input for Interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Comparison slider"
            />
          </div>
        </div>

        {/* Stats Below */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 text-center">
            <div className="text-4xl font-display font-bold text-foreground mb-2">80%</div>
            <p className="text-muted-foreground">Economia em Espaço</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 text-center">
            <div className="text-4xl font-display font-bold text-accent mb-2">5 metros</div>
            <p className="text-muted-foreground">Comprimento extendido total</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
