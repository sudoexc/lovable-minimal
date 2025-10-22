import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Modern Family Home",
      category: "Residential Floor Plan"
    },
    {
      image: portfolio2,
      title: "Urban Development Site",
      category: "Site Planning"
    },
    {
      image: portfolio3,
      title: "Contemporary Interior",
      category: "Interior Layout"
    },
    {
      image: portfolio4,
      title: "Digital Navigation Map",
      category: "Interactive Mapping"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent projects and design excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-sm font-medium mb-1 text-accent">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
