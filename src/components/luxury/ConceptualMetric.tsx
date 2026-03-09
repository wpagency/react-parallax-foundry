import { motion } from 'framer-motion';
import { LuxuryScene } from '@/components/three/LuxuryScene';

interface ConceptualMetricProps {
  title: string;
  description: string;
  concept: string;
  sceneConfig?: {
    showParticles?: boolean;
    showCrystals?: boolean;
  };
}

export const ConceptualMetric = ({ 
  title, 
  description, 
  concept,
  sceneConfig = { showParticles: true, showCrystals: false }
}: ConceptualMetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }}
      className="group relative h-72 overflow-hidden rounded-3xl glass-morphism hover:animate-pulse-glow"
    >
      {/* Premium Border Effect */}
      <div className="absolute inset-0 premium-border opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="premium-border-inner" />
      </div>
      
      {/* WebGL Background */}
      <div className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
        <LuxuryScene 
          className="w-full h-full"
          showParticles={sceneConfig.showParticles}
          showCrystals={sceneConfig.showCrystals}
        />
      </div>
      
      {/* Morphing Background Gradient */}
      <div className="absolute inset-0 morphing-gradient opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent group-hover:from-background/90" />
      
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 premium-glow opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl" />
      
      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        <div>
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              {concept}
            </span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight text-shimmer group-hover:text-foreground transition-all duration-500">
            {title}
          </h3>
        </div>
        
        <motion.p 
          className="text-muted-foreground text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
      
      {/* Floating Accent Elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primary to-accent-purple rounded-full animate-floating-up-down opacity-60" />
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-gold rounded-full animate-pulse opacity-40" />
      
      {/* Interactive Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
    </motion.div>
  );
};


