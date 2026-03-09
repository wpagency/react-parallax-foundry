import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Globe, 
  Heart
} from 'lucide-react';

interface StoryPillar {
  id: string;
  icon: any;
  title: string;
  description: string;
  narrative: string;
  color: string;
  accent: string;
}

const storyPillars: StoryPillar[] = [
  {
    id: 'discover',
    icon: Compass,
    title: 'Technology Assessment',
    description: 'Every modern solution begins with understanding your current digital architecture',
    narrative: 'We analyze your existing WordPress setup, performance bottlenecks, and growth goals to architect the perfect modern solution - whether that\'s optimization, migration to Astro, or a custom React build.',
    color: 'from-blue-500 to-cyan-500',
    accent: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'craft',
    icon: Sparkles,
    title: 'Modern Architecture',
    description: 'Where cutting-edge technology meets business objectives',
    narrative: 'We build with the future in mind - leveraging Astro for lightning-fast SEO, React for dynamic features, or optimized WordPress when it fits. Every technical decision serves your growth.',
    color: 'from-purple-500 to-pink-500',
    accent: 'from-purple-500/10 to-pink-500/10'
  },
  {
    id: 'amplify',
    icon: Globe,
    title: 'Performance Optimization',
    description: 'Your website should be faster than your competition',
    narrative: 'Through careful framework selection, hosting optimization, and modern build processes, we ensure your site loads in under 2 seconds. Fast sites rank higher, convert better, and create happier users.',
    color: 'from-green-500 to-emerald-500',
    accent: 'from-green-500/10 to-emerald-500/10'
  },
  {
    id: 'nurture',
    icon: Heart,
    title: 'Ongoing Partnership',
    description: 'Technology evolves, and so should your website',
    narrative: 'We don\'t just launch and disappear. Our ongoing partnership ensures your site stays fast, secure, and ahead of the curve as web technologies advance.',
    color: 'from-orange-500 to-red-500',
    accent: 'from-orange-500/10 to-red-500/10'
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

const pillarVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const StoryPillars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide mb-8 shimmer-border">
            <Sparkles className="w-5 h-5" />
            <span>Our Digital Storytelling Approach</span>
          </div>
          
          <h2 className="text-display-large mb-8">
            <span className="text-foreground">Every story</span>
            <br />
            <span className="text-gradient">has four chapters</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From discovery to deployment, we craft digital narratives that resonate with your audience and drive meaningful growth.
          </p>
        </motion.div>

        {/* Story Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {storyPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={pillar.id}
                variants={pillarVariants}
                className="group relative"
              >
                {/* Card container */}
                <div className="premium-card p-10 h-full relative overflow-hidden hover:border-primary/30 transition-all duration-700 hover-lift">
                  {/* Gradient accent background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon & Title Section */}
                    <div className="flex items-start gap-8 mb-8">
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 group-hover:animate-float`}>
                        <Icon className="w-10 h-10 text-white drop-shadow-sm" />
                        
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    {/* Narrative Quote */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/10 border border-primary/10 rounded-2xl p-8 group-hover:border-primary/20 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl text-primary/30 font-serif leading-none">"</div>
                        <div className="flex-1">
                          <p className="text-foreground leading-relaxed italic text-lg font-light">
                            {pillar.narrative}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Chapter indicator */}
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Connection Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16 origin-center"
        />

        {/* Connecting narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            "These four pillars don't just build websites-they create digital experiences that tell your unique story, 
            connect with your community, and grow with your ambitions."
          </p>
        </motion.div>
      </div>
    </section>
  );
};



