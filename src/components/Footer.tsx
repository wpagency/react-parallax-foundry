import { Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-foreground">
                Parallax Foundry<span className="text-primary">.xyz</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern web development solutions including WordPress, Astro, and React. 
              We transform digital experiences with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <a href="mailto:hello@wpagency.xyz" className="text-sm font-medium">
                hello@wpagency.xyz
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {['Custom Development', 'WordPress to Astro/React', 'Performance Optimization', 'Security & Maintenance'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {['About', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Ready to transform your digital presence?
            </p>
            <a href="#contact">
              <Button variant="premium" className="w-full justify-center hover:scale-105 transition-transform duration-300">
                Start Your Project
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Parallax Foundry. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <a href="https://wpagency.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
              WP Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


