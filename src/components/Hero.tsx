import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Evento Presencial • 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Workshop de
            <span className="block text-gradient mt-2">
              Tecnologia & IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Aprenda com especialistas referências em tecnologia, marketing digital, 
            inovação e inteligência artificial
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover-glow animate-glow-pulse">
              Garantir Minha Vaga
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              Ver Programação
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-delay">
            <div className="flex items-center justify-center gap-3 text-foreground/80">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">15-16 Março, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground/80">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">São Paulo, SP</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground/80">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">Vagas Limitadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
