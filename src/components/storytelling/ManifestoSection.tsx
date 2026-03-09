import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Heart,
  Brain,
  Target,
  Lightbulb
} from 'lucide-react';

interface ManifestoPoint {
  icon: any;
  title: string;
  content: string;
  accent: string;
}

const manifestoPoints: ManifestoPoint[] = [
  {
    icon: Heart,
    title: "We believe",
    content: "that every business, no matter how niche, deserves a digital presence built with modern technology that authentically represents their passion and connects them with their community.",
    accent: "from-red-500/10 to-pink-500/10"
  },
  {
    icon: Brain,
    title: "We understand",
    content: "that choosing the right technology stack - whether WordPress, Astro, or React - can make the difference between a website that struggles and one that thrives.",
    accent: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Target,
    title: "We create",
    content: "not just websites, but high-performance digital experiences that load fast, rank well, and provide the foundation for authentic community growth.",
    accent: "from-green-500/10 to-emerald-500/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const pointVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="premium-card p-16">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center border border-primary/20">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h3 className="text-display text-foreground mb-6">
                The <span className="text-gradient">Parallax Foundry</span> Manifesto
              </h3>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Our core beliefs about digital storytelling, modern technology, and authentic business growth.
              </p>
            </div>
            
            {/* Manifesto Points */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-12 mb-16"
            >
              {manifestoPoints.map((point, index) => {
                const Icon = point.icon;
                
                return (
                  <motion.div
                    key={index}
                    variants={pointVariants}
                    className="group"
                  >
                    <div className="flex items-start gap-8 p-8 rounded-3xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-500 hover-lift">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                        <Icon className="w-8 h-8 text-primary group-hover:animate-bounce-gentle" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors duration-300">
                          {point.title}
                        </h4>
                        <p className="text-lg text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          {point.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Signature Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center pt-12 border-t border-border/50"
            >
              <div className="relative">
                <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-4">"</div>
                <blockquote className="text-2xl text-gradient font-semibold italic max-w-4xl mx-auto leading-relaxed">
                  Your vision + Modern technology + Our expertise = Digital success that lasts
                </blockquote>
                <div className="text-6xl text-primary/20 font-serif absolute -bottom-6 -right-4 rotate-180">"</div>
              </div>
              
              <div className="mt-8">
                <p className="text-muted-foreground font-medium">
                  - The Parallax Foundry Promise
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



