import { Card, CardContent } from "@/components/ui/card";
import { Cpu, TrendingUp, Lightbulb, Brain } from "lucide-react";

const topics = [
  {
    icon: Cpu,
    title: "Tecnologia",
    description: "Últimas tendências em desenvolvimento, cloud computing e arquitetura de sistemas modernos",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estratégias avançadas de growth, SEO, mídia paga e marketing de conteúdo",
    color: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Metodologias ágeis, design thinking e como criar produtos disruptivos",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "IA generativa, automação inteligente e o futuro do trabalho com machine learning",
    color: "text-secondary",
  },
];

export const Topics = () => {
  return (
    <section className="py-24 px-6 bg-muted/30 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Você Vai <span className="text-gradient">Aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conteúdo prático e aplicável desenvolvido por especialistas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 group hover:border-primary/50 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <topic.icon className={`h-7 w-7 ${topic.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
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
