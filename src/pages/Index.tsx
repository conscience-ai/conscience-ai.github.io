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
            Advancing Intelligence
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-3xl mx-auto">
            <p>
              Conscience is an applied research lab focused on closing AI’s toughest performance gaps.
            </p>
            
            <p>
            We work in collaboration with the best domain experts in the field of engineering, bio-medical sciences, chemical sciences, robotics, finance... to provide high quality domain specific data, training pipelines, and red team evaluations to advance frontier models in fields where it falls short.
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