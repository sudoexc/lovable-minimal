import { Building2, Map, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "House Plans",
      description: "Professional architectural designs tailored to your vision and needs"
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "Detailed mapping solutions with modern visualization techniques"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Collaborative approach ensuring your satisfaction at every step"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a professional design studio specializing in creating detailed house plans 
              and interactive mapping solutions. With years of experience and a passion for precision, 
              we transform ideas into beautifully crafted designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-muted/50 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Lovable, we believe that great design is born from understanding our clients' 
              unique needs and aspirations. Every project is an opportunity to create something 
              extraordinary – whether it's a dream home plan or an intuitive interactive map. 
              We combine technical expertise with creative vision to deliver solutions that 
              exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
