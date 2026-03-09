import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Eye, 
  Zap, 
  BookOpen,
  Sparkles
} from 'lucide-react';

interface Achievement {
  icon: any;
  value: string;
  label: string;
  description: string;
  color: string;
  accent: string;
}

const achievements: Achievement[] = [
  { 
    icon: Users, 
    value: '10+', 
    label: 'WordPress to Modern Migrations', 
    description: 'Successful transformations from legacy to cutting-edge',
    color: 'text-blue-500',
    accent: 'from-blue-500/20 to-cyan-500/20'
  },
  { 
    icon: Eye, 
    value: '3x', 
    label: 'Average Performance Improvement', 
    description: 'Faster load times mean better user experiences',
    color: 'text-purple-500',
    accent: 'from-purple-500/20 to-pink-500/20'
  },
  { 
    icon: Zap, 
    value: '<2s', 
    label: 'Target Load Times Achieved', 
    description: 'Lightning-fast sites that convert visitors to customers',
    color: 'text-green-500',
    accent: 'from-green-500/20 to-emerald-500/20'
  },
  { 
    icon: BookOpen, 
    value: '100%', 
    label: 'Future-Proof Architecture', 
    description: 'Built to evolve with tomorrow\'s technologies',
    color: 'text-orange-500',
    accent: 'from-orange-500/20 to-red-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const AchievementsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="premium-card p-16 max-w-5xl mx-auto">
            {/* Header Icon */}
            <div className="flex justify-center mb-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center animate-glow-pulse relative">
                <Sparkles className="w-12 h-12 text-background drop-shadow-sm" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-purple opacity-30 blur-xl animate-pulse" />
              </div>
            </div>
            
            <motion.h3 
              className="text-display text-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where Stories Meet <span className="text-gradient">Success</span>
            </motion.h3>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Every number tells a story. Every story creates a connection. Every connection builds a community.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    variants={statVariants}
                    className="group relative"
                  >
                    <div className="text-center group hover-lift relative">
                      {/* Background accent */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                      
                      <div className="relative z-10 p-8">
                        {/* Icon */}
                        <div className={`${stat.color} mb-6 flex justify-center group-hover:scale-110 transition-all duration-500`}>
                          <div className="w-16 h-16 rounded-2xl bg-current/10 flex items-center justify-center group-hover:animate-bounce-gentle">
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                        
                        {/* Value */}
                        <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-105 transition-transform duration-300">
                          {stat.value}
                        </div>
                        
                        {/* Label */}
                        <h4 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {stat.label}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Bottom narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8 border-t border-border/50"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">This is the magic of authentic digital presence</span> - 
                where technology serves storytelling, and every interaction moves your narrative forward.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



