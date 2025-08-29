const heroBg = "/lovable-uploads/29c6b39a-4625-4805-86f3-613f106f671c.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Background Section */}
      <section 
        className="h-screen relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </section>

      {/* Content Section */}
      <section className="relative -mt-32 z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-text-primary font-heading">
            Human Superintelligence
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-3xl mx-auto">
            <p>
              Conscience is an applied research lab working on enhancing human AI complementarity, the problem is simple: with the advent of more advance AI systems, overeliance on AI may cause human reasoning to deplete and undereliance may not allow us to use AI to it's full potential, hence we need better interactive environments and user interfaces that do not make us dumb in long term, while at the same time allow us to utilise AI's full potential.
            </p>
            
            <p>
              We work at the intersection of cognitive sciences, human psychology, advanced engineering, and research, collaborating with the best doctors, psychologists, and DL/ML researchers to deliver one of the most essential products humanity will need in the long term.
            </p>
            
            <p>If you think this is something that excites you, then please reach out to us</p>
            
            <p className="text-base">
              — <a 
                href="https://x.com/aditya_g1001" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aditya
              </a>, <a 
                href="https://ashpect.notion.site/Hi-I-am-Ashish-4af23bcefab14e86a6fd581a41871478" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ashish
              </a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;