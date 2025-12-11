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
      title: "Armazenamento Compacto",
      description: "A dobra estilo acordeão reduz a pegada em 80%. Armazene múltiplas unidades no espaço de uma rampa tradicional.",
    },
    {
      icon: Zap,
      title: "Implantação Rápida",
      description: "Do armazenamento à operação em menos de 60 segundos. Não requer ferramentas, operação por uma única pessoa.",
    },
    {
      icon: Weight,
      title: "Capacidade de Carga Pesada",
      description: "Projetada para suportar até 2.268 kg (5.000 lbs). Perfeita para paletes, equipamentos e cargas pesadas.",
    },
    {
      icon: Shield,
      title: "Alumínio Durável",
      description: "Construção em alumínio de grau aeronáutico. Resistente à corrosão, à prova de intempéries, construída para durar décadas.",
    },
    {
      icon: Cog,
      title: "Roletes Integrados",
      description: "Transportadores de roletes embutidos reduzem o atrito e o esforço. Fluxo de material suave em ambas as direções.",
    },
    {
      icon: ArrowUpDown,
      title: "Altura Ajustável",
      description: "Múltiplas configurações de altura se adaptam a qualquer doca ou leito de caminhão. Compatibilidade universal garantida.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Principais Recursos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projetada para <span className="text-gradient">Eficiência Máxima</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A RampPro não é apenas uma rampa, é uma solução de logística que economiza espaço, reduz custos e melhora a segurança
            em suas operações de manuseio de materiais.
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
