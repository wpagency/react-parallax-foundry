
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-background pt-32 pb-20"
      id="main-content"
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-neutral-50 dark:to-neutral-900" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - creative storytelling */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-display-large mb-6 text-foreground"
          >
            Your digital story{' '}
            <span className="block sm:inline">deserves{' '}
            <span className="text-gradient animate-gradient-x">extraordinary telling</span></span>
          </motion.h1>

          {/* Empathy line */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Too many businesses settle for forgettable websites. We don't.
          </motion.p>

          {/* Value proposition with personality */}
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            <span className="text-primary font-semibold">Parallax Foundry</span> architects modern web solutions using WordPress, Astro, and React to transform passionate communities into thriving online destinations.{' '}
            <span className="block sm:inline italic">Where your unique story meets cutting-edge technology.</span>
          </motion.p>

          {/* Clean value points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-12 px-4"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>Modern tech stack</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>SEO-optimized solutions</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>Performance-first approach</span>
            </div>
          </motion.div>

          {/* Enhanced CTA section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4"
          >
            <a href="#contact">
              <Button variant="premium" size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Begin your story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="ghost" size="lg" className="px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:bg-accent/10">
                Explore our portfolio
              </Button>
            </a>
          </motion.div>

          {/* Enhanced metrics showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <EnhancedMetric 
                icon={<Users className="w-7 h-7" />}
                value="7+"
                label="Digital stories"
                description="Crafted with precision"
              />
              <EnhancedMetric 
                icon={<Award className="w-7 h-7" />}
                value="∞"
                label="Creative possibilities"
                description="Limited only by imagination"
                featured={true}
              />
              <EnhancedMetric 
                icon={<CheckCircle className="w-7 h-7" />}
                value="100%"
                label="Authentic partnerships"
                description="Built on trust & results"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface EnhancedMetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  featured?: boolean;
}

const EnhancedMetric = ({ icon, value, label, description, featured = false }: EnhancedMetricProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`
        relative p-6 rounded-2xl border transition-all duration-300 group cursor-default
        ${featured 
          ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg' 
          : 'bg-card/50 border-border/50 hover:border-primary/30'
        }
        backdrop-blur-sm hover:shadow-lg
      `}
    >
      {featured && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
      )}
      
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`
          p-3 rounded-xl transition-colors duration-300
          ${featured 
            ? 'bg-primary/10 text-primary' 
            : 'bg-muted/50 text-primary group-hover:bg-primary/10'
          }
        `}>
          {icon}
        </div>
        
        <div className="space-y-1">
          <div className={`
            text-3xl font-bold transition-colors duration-300
            ${featured ? 'text-primary' : 'text-foreground'}
          `}>
            {value}
          </div>
          <div className="text-lg font-semibold text-foreground">
            {label}
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};



