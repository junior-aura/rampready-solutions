import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ramp.jpg";
import mp1 from "@/assets/video/Rampa-ajustavel.mp4";
import mp2 from "@/assets/video/rampa-dobravel.mp4";
import mp3 from "@/assets/video/usage.mp4";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoList = [
    {
      title: "Rampa Auratec em campo",
      description: "Demonstração real em ambiente de armazém",
      duration: "2:34",
      src: mp1,
      poster: heroImage,
    },
    {
      title: "Guia de Aplicação Rápido",
      description: "Montagem e desmontagem em menos de 3 minutos",
      duration: "1:45",
      src: mp2,
      poster: heroImage,
    },
    {
      title: "Teste de Carga",
      description: "Capacidade máxima de 2.268 kg em operação",
      duration: "3:12",
      src: mp3,
      poster: heroImage,
    },
  ];

  // Efeito para carregar novo vídeo quando o índice muda
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      
      // Forçar recarregamento do vídeo
      video.load();
      
      if (isPlaying) {
        video.play().catch(e => {
          console.log("Autoplay prevented:", e);
          setIsPlaying(false);
        });
      }
      
      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [currentVideoIndex]); // Executa quando currentVideoIndex muda

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  const switchVideo = (index: number) => {
    if (index === currentVideoIndex) {
      // Se clicar no vídeo atual, apenas toca/pausa
      togglePlayPause();
    } else {
      // Troca para novo vídeo
      setCurrentVideoIndex(index);
      setIsPlaying(true);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section id="video" className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 animate-fade-up">
            Hora da ação!
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Veja a <span className="text-gradient">Rampa Auratec</span> em campo
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            A rapidez com que a Rampa Ajustável se transforma de compacta à operação total.
            Demonstrações reais em ambientes de armazém.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
              <div className="text-white text-lg">Carregando vídeo...</div>
            </div>
          )}
          
          {/* Vídeo com key única para forçar recriação */}
          <video
            key={`video-${currentVideoIndex}`} // 🔥 KEY CRÍTICA - força recriação
            ref={videoRef}
            className="w-full h-full object-cover"
            onClick={handleVideoClick}
            onEnded={handleVideoEnd}
            preload="metadata"
            playsInline
            muted={isMuted}
          >
            <source src={videoList[currentVideoIndex].src} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          {/* Video Overlay Controls */}
          <div className={`absolute inset-0 transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Play/Pause Button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlayPause}
                  className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-95"
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                >
                  <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePlayPause}
                    className="text-white hover:bg-white/20"
                    aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMute}
                    className="text-white hover:bg-white/20"
                    aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>

                  <div className="text-white text-sm font-medium">
                    {videoList[currentVideoIndex].title}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-sm">
                    {videoList[currentVideoIndex].duration}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={enterFullscreen}
                    className="text-white hover:bg-white/20"
                    aria-label="Tela cheia"
                  >
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Current Video Info */}
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 bg-black/70 rounded-lg text-primary-foreground text-sm font-medium">
                {currentVideoIndex + 1} / {videoList.length}
              </div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {videoList[currentVideoIndex].title}
          </h3>
          <p className="text-muted-foreground">
            {videoList[currentVideoIndex].description}
          </p>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videoList.map((video, index) => (
            <button
              key={index}
              onClick={() => switchVideo(index)}
              className={`relative aspect-video rounded-xl overflow-hidden shadow-lg group transition-all duration-300 ${
                currentVideoIndex === index 
                  ? 'ring-2 ring-accent ring-offset-2 ring-offset-background' 
                  : 'hover:scale-[1.02]'
              }`}
              aria-label={`Assistir ${video.title}`}
            >
              {/* Video Thumbnail - Usando vídeo real como thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700">
                <video
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  poster={video.poster}
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-primary-foreground font-medium text-sm truncate">
                      {video.title}
                    </p>
                    <p className="text-primary-foreground/70 text-xs">
                      {video.duration}
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 text-accent-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Active Indicator */}
              {currentVideoIndex === index && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Video Tips */}
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-card/50 rounded-xl border border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              💡 <strong>Dica:</strong> Clique em qualquer miniatura para alternar entre as demonstrações
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact" className="gap-2">
                <Play className="w-4 h-4" />
                Solicitar demonstração personalizada
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;