import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const speakers = [
  {
    name: "Ana Silva",
    role: "Head of Innovation",
    company: "TechCorp Brasil",
    expertise: ["Transformação Digital", "Inovação", "Liderança"],
    image: speaker1,
  },
  {
    name: "Carlos Mendes",
    role: "Marketing Director",
    company: "Digital Ventures",
    expertise: ["Marketing Digital", "Growth", "Estratégia"],
    image: speaker2,
  },
  {
    name: "Rafael Costa",
    role: "AI Research Lead",
    company: "AI Labs",
    expertise: ["Inteligência Artificial", "Machine Learning", "Data Science"],
    image: speaker3,
  },
  {
    name: "Marina Oliveira",
    role: "CEO & Founder",
    company: "StartupHub",
    expertise: ["Empreendedorismo", "Inovação", "Venture Capital"],
    image: speaker4,
  },
];

export const Speakers = () => {
  return (
    <section id="speakers" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Palestrantes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda com especialistas que estão transformando o mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{speaker.company}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
