import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@lovable.design", label: "Email" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Lovable</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Designing house plans and interactive maps with creativity and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80 mb-4">
                <p>+1 (555) 123-4567</p>
                <p>hello@lovable.design</p>
                <p>123 Design Street, CA 90210</p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Lovable. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
