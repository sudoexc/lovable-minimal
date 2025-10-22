import { Home, MapPin, Ruler, Layers } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential House Plans",
      description: "Custom home designs from concept to completion, including floor plans, elevations, and detailed construction drawings."
    },
    {
      icon: Layers,
      title: "Commercial Building Plans",
      description: "Professional architectural plans for commercial spaces, offices, and mixed-use developments with focus on functionality."
    },
    {
      icon: MapPin,
      title: "Interactive Mapping",
      description: "Digital mapping solutions with interactive features, perfect for real estate, urban planning, and navigation applications."
    },
    {
      icon: Ruler,
      title: "Site Plans & Layouts",
      description: "Comprehensive site planning services including property surveys, landscape design, and utility placement planning."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
