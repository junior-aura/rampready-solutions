import { Warehouse, Truck, Package, Building2 } from "lucide-react";
import heroImage from "@/assets/Rampa-hero.png";

const Applications = () => {
  const applications = [
    {
      icon: Warehouse,
      title: "Docas de Carregamento em Armazéns",
      description: "Conecte perfeitamente a doca ao caminhão. Perfeito para instalações de alto volume com alturas de caminhão variadas.",
      image: heroImage,
    },
    {
      icon: Truck,
      title: "Carga/Descarga de Caminhões",
      description: "Solução móvel para qualquer ponto de entrega. Ideal para rotas com múltiplas paradas e diferentes configurações de doca.",
      image: heroImage,
    },
    {
      icon: Package,
      title: "Operações com Contêineres",
      description: "Acesse contêineres de transporte com facilidade. Altura ajustável acomoda contêineres padrão de 20 e 40 pés.",
      image: heroImage,
    },
    {
      icon: Building2,
      title: "Centros de Distribuição",
      description: "Lide com altas demandas de rendimento. Múltiplas rampas podem ser instaladas para aumentar a capacidade da baia de carregamento.",
      image: heroImage,
    },
  ];

  return (
    <section id="applications" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Casos de Uso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Construída para a <span className="text-gradient">Sua Indústria</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            De pequenos armazéns a grandes centros de distribuição, a RampPro se adapta às suas necessidades operacionais específicas.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <app.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {app.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Empresas atendidas" },
              { value: "100.000+", label: "Metros de Estrutura" },
              { value: "130+", label: "Avaliações" },
              { value: "99.8%", label: "Índice de Satisfação" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
