import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export const TransitionBridge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-primary/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "We used to think our website was fine - until we realized it was silently costing us leads."
          </motion.p>

          <motion.h2 
            className="text-display text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileInView={{ 
              textShadow: [
                "0 0 0px hsl(var(--primary) / 0)",
                "0 0 20px hsl(var(--primary) / 0.3)",
                "0 0 0px hsl(var(--primary) / 0)"
              ]
            }}
          >
            Here's How We're <span className="text-gradient text-shimmer">Different</span>...
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Most agencies fix problems after they happen. We architect to prevent them.
          </motion.p>

          {/* Before/After Comparison */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Before - Old Way */}
            <motion.div 
              className="relative p-8 rounded-3xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10 glass-morphism"
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -30, rotateY: -15 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-3 left-8 bg-destructive text-destructive-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                OLD WAY
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-destructive">Reactive Band-Aids</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Slow websites lose customers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Outdated tech stacks break
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Emergency fixes cost 3x more
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Stuck with legacy platforms
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* After - Our Way */}
            <motion.div 
              className="relative p-8 rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-luxury-gold/10 glass-morphism premium-glow"
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 30, rotateY: 15 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-primary to-luxury-gold text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-shimmer">
                OUR WAY
              </div>
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-primary text-shimmer">Modern Architecture</h3>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Shield className="w-5 h-5 text-primary animate-pulse" />
                    Lightning-fast modern frameworks
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap className="w-5 h-5 text-luxury-gold animate-pulse" />
                    Seamless WordPress-to-Astro migrations
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Shield className="w-5 h-5 text-primary animate-pulse" />
                    Future-proof technology choices
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap className="w-5 h-5 text-luxury-gold animate-pulse" />
                    SEO-optimized from day one
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Transition Arrow */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <a href="/services" className="group">
              <div className="flex items-center gap-4 px-8 py-4 glass-morphism rounded-full border border-primary/40 hover:border-luxury-gold/50 transition-all duration-300 group-hover:scale-105 premium-glow">
                <span className="text-base font-semibold text-primary text-shimmer">Modern solutions ahead</span>
                <ArrowRight className="w-5 h-5 text-luxury-gold group-hover:translate-x-2 transition-transform duration-300 animate-pulse" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-primary/15 to-accent-purple/15 rounded-full blur-3xl animate-floating-up-down"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-luxury-gold/15 to-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-accent-purple/10 rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  );
};



