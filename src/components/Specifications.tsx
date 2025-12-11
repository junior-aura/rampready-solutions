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
      category: "Dimensões",
      items: [
        { label: "Comprimento (extendida)", value: "500 cm (5 metros)" },
        { label: "Comprimento (dobrada)", value: "2.4 ft (0.73 m)" },
        { label: "Largura", value: "100 cm" },
        { label: "Altura (dobrada)", value: "61 cm" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Capacidade de carga", value: "5,000 lbs (2,268 kg)" },
        { label: "Tempo de posicionamento", value: "< 180 segundos" },
        { label: "Altura de aplicação", value: "36 - 54 in (91 - 137 cm)" },
        { label: "Ângulo de inclinação", value: "15° - 25° adjustable" },
      ],
    },
    {
      category: "Construção",
      items: [
        { label: "Material da Estrutura", value: "Alumínio Aeronáutico 6061-T6" },
        { label: "Material da Superfície", value: "Chapa Xadrez Antiderrapante" },
        { label: "Tipo de Roletes", value: "Rolamentos de Aço Reforçados" },
        { label: "Peso", value: "185 lbs (84 kg)" },
      ],
    },
    {
      category: "Safety & Compliance",
      items: [
        { label: "Fator de Segurança", value: "3:1 mínimo" },
        { label: "Em Conformidade com OSHA", value: "Sim" },
        { label: "Classificação de Intempéries", value: "IP65 (Uso Externo)" },
        { label: "Garantia", value: "2 Anos Limitada" },
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
              Dados técnicos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Construída para o <span className="text-gradient">Desempenho</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Cada especificação é projetada para máxima durabilidade, segurança e facilidade de uso.
              Nossas rampas excedem os padrões da indústria em todos os aspectos.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-foreground/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-display font-bold text-accent">730 dias</div>
                <div className="text-sm text-primary-foreground/70">Garantia</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-display font-bold text-accent">3:1</div>
                <div className="text-sm text-primary-foreground/70">Fator de Segurança</div>
              </div>
            </div>

            {/* Download Button */}
            <Button variant="hero-outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Baixar ficha técnica completa
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
