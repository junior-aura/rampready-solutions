import { Play } from "lucide-react";
import heroImage from "@/assets/hero-ramp.jpg";

const VideoSection = () => {
  return (
    <section id="video" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Hora da ação!
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja a <span className="text-gradient">Rampa Auratec</span> em campo
          </h2>
          <p className="text-lg text-muted-foreground">
            A rapidez com que a Rampa Ajustável se transforma de compacta à operação total.
            Demonstrações reais em ambientes de armazém.
          </p>
        </div>

        {/* Main Video */}
        <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-12">
          <img
            src={heroImage}
            alt="RampPro deployment demonstration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group hover:bg-black/30 transition-colors">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          {/* Video Duration Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-lg text-primary-foreground text-sm">
            2:34
          </div>
        </div>

        {/* Additional Video Thumbnails */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Guia de Aplicação Rápido", duration: "1:45" },
            { title: "Teste de Carga", duration: "3:12" },
            { title: "Testemunho do Gerente", duration: "2:08" },
          ].map((video, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={heroImage}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-accent-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-primary-foreground font-medium text-sm">{video.title}</p>
                <p className="text-primary-foreground/70 text-xs">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
