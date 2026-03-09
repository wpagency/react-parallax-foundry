import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Sparkles, Crown, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConceptualMetric } from '@/components/luxury/ConceptualMetric';

const luxuryMetrics = [
  {
    title: "Elevated Experiences",
    description: "Every interaction crafted with precision and purpose, transforming ordinary moments into extraordinary outcomes.",
    concept: "Excellence",
    sceneConfig: { showParticles: true, showCrystals: false }
  },
  {
    title: "Accelerated Success",
    description: "Rapid deployment meets lasting impact, delivering premium results at the speed of innovation.",
    concept: "Velocity",
    sceneConfig: { showParticles: false, showCrystals: true }
  },
  {
    title: "Flawless Execution",
    description: "Where perfection meets pragmatism, ensuring every detail serves a purpose in your success story.",
    concept: "Precision",
    sceneConfig: { showParticles: true, showCrystals: true }
  },
  {
    title: "Lasting Partnership",
    description: "Beyond transactions, we build enduring relationships that evolve and grow with your ambitions.",
    concept: "Legacy",
    sceneConfig: { showParticles: true, showCrystals: false }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

export const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-br from-background via-primary/3 to-luxury-gold/5 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-full blur-3xl animate-floating-up-down" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-luxury-gold/10 to-primary/10 rounded-full blur-3xl animate-float" />
      
      {/* Additional luxury elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-accent-purple/5 to-transparent rounded-full blur-2xl" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-br from-luxury-gold/8 to-transparent rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-morphism border border-primary/30 text-primary font-semibold text-sm mb-8 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-5 h-5 animate-pulse" />
            <span className="text-shimmer">Premium Excellence</span>
            <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 float-gentle"
            whileInView={{ 
              background: [
                "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--foreground)))",
                "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--luxury-gold)))",
                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--luxury-gold)))"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="text-foreground">Where vision meets</span>
            <br />
            <span className="luxury-text-gradient text-shimmer">extraordinary craft</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            We don't just build websites. We craft digital journeys where every interaction has purpose.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Beyond the ordinary lies a realm of digital artistry-where every pixel serves purpose 
            and every interaction tells your story.
          </motion.p>
        </motion.div>

        {/* Enhanced Luxury Conceptual Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
        >
          {luxuryMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileInView={{ 
                rotateY: [0, 5, 0],
                rotateX: [0, 2, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 1, 0.5, 1]
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <ConceptualMetric
                title={metric.title}
                description={metric.description}
                concept={metric.concept}
                sceneConfig={metric.sceneConfig}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center justify-center gap-4"
              whileInView={{ scale: [0.95, 1.05, 1] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Gem className="w-10 h-10 text-primary animate-pulse premium-glow" />
              <span className="text-shimmer">Ready to transcend the ordinary?</span>
              <Sparkles className="w-8 h-8 text-luxury-gold animate-floating-up-down" />
            </motion.h3>
            <p className="text-lg text-muted-foreground mb-8">
              Step into a world where digital excellence meets artistic vision-where your brand 
              becomes an unforgettable experience.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="group relative overflow-hidden px-8 py-4 text-lg font-semibold glass-morphism border border-primary/30 hover:border-primary/50 premium-glow"
                >
                  <Link to="/services">
                    <span className="relative z-10">Explore Our Services</span>
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="group px-8 py-4 text-lg font-medium glass-morphism border border-border/50 hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
                >
                  <Link to="/about">
                    Learn Our Story
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



