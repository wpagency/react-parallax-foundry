import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  BookOpen,
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StorytellingCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="premium-card p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
            
            {/* Header Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center animate-bounce-gentle">
                  <BookOpen className="w-10 h-10 text-background drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-purple opacity-30 blur-xl animate-glow-pulse" />
              </div>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-display text-foreground mb-6"
            >
              Ready to Tell <span className="text-gradient">Your Story</span>?
            </motion.h3>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Every great digital story starts with a single conversation. Let's discover what makes your business 
              unique and create a digital experience that captures that magic.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <a href="#contact" className="group">
                <Button variant="premium" size="xl" className="px-10 py-4 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce-gentle mr-3" />
                  Start Our Story Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ml-3" />
                </Button>
              </a>
              
              <a href="#portfolio" className="group">
                <Button variant="ghost" size="xl" className="px-10 py-4 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 group-hover:animate-bounce-gentle mr-3" />
                  Explore Digital Stories
                </Button>
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span>Custom solutions only</span>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-primary/30 animate-float" />
            <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-accent-purple/30 animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute top-1/2 left-8 w-1 h-1 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '-1s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


