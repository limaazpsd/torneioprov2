export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs with animations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-secondary/25 rounded-full blur-[100px] animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-[90px] animate-float-fast" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[110px] animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-primary/25 rounded-full blur-[100px] animate-float-medium" style={{ animationDelay: '1s' }} />
      <div className="absolute top-10 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-float-fast" style={{ animationDelay: '3s' }} />
      
      {/* Additional smaller orbs for depth */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-[70px] animate-float-medium" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-secondary/15 rounded-full blur-[75px] animate-float-slow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-3/4 left-10 w-52 h-52 bg-primary/20 rounded-full blur-[85px] animate-float-fast" style={{ animationDelay: '0.5s' }} />
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_70%)]" />
    </div>
  );
};
