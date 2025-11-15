import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Workshop Tech & IA</h3>
            <p className="text-muted-foreground">
              Transformando profissionais através da tecnologia e inovação.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-muted-foreground mb-2">contato@workshoptech.com.br</p>
            <p className="text-muted-foreground">(11) 9999-9999</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <button className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </button>
              <button className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </button>
              <button className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Workshop Tech & IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
