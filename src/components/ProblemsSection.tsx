import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, DollarSign, Shield, TrendingDown, Zap, Server, Bug, Code } from 'lucide-react';

interface Problem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
    impact: string;
  };
  consequences: string[];
  color: string;
}

const problems: Problem[] = [
  {
    id: '1',
    icon: <Clock className="w-8 h-8" />,
    title: 'Legacy Technology is Killing Performance',
    description: 'Outdated WordPress themes, bloated plugins, and old hosting stacks create slow, unreliable websites that frustrate users and hurt SEO.',
    stats: {
      label: 'Average Page Load Time',
      value: '5.2s',
      impact: 'Visitors leave after 3 seconds'
    },
    consequences: [
      'Google penalizes slow sites in search',
      'Mobile users bounce immediately',
      'Competitors win with faster sites',
      'Revenue lost to poor user experience'
    ],
    color: 'text-warning'
  },
  {
    id: '2',
    icon: <Shield className="w-8 h-8" />,
    title: 'WordPress Security Vulnerabilities',
    description: 'WordPress powers 40% of the web, making it a prime target. Plugins, themes, and core updates create constant security risks.',
    stats: {
      label: 'WordPress Sites Compromised',
      value: '90K+',
      impact: 'Daily security incidents'
    },
    consequences: [
      'Malware infections spread',
      'SEO blacklisting by Google',
      'Customer data compromised',
      'Expensive cleanup and recovery'
    ],
    color: 'text-destructive'
  },
  {
    id: '3',
    icon: <Server className="w-8 h-8" />,
    title: 'Shared Hosting Limitations',
    description: 'Budget hosting providers oversell servers, creating performance bottlenecks and reliability issues that hurt your business.',
    stats: {
      label: 'Uptime on Cheap Hosting',
      value: '95%',
      impact: '18 days down per year'
    },
    consequences: [
      'Traffic spikes crash your site',
      'Slow database queries frustrate users',
      'Limited resources throttle growth',
      'Poor customer support when issues arise'
    ],
    color: 'text-accent'
  },
  {
    id: '4',
    icon: <Code className="w-8 h-8" />,
    title: 'Stuck with Outdated Technology',
    description: 'Your WordPress site was built years ago with old practices. Modern frameworks like Astro and React offer better performance and SEO.',
    stats: {
      label: 'Performance Gap',
      value: '10x',
      impact: 'Faster with modern frameworks'
    },
    consequences: [
      'Competitors using faster tech win',
      'Poor Core Web Vitals hurt SEO',
      'Development becomes expensive',
      'Missing out on modern features'
    ],
    color: 'text-gold'
  }
];

export const ProblemsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-medium text-sm tracking-wide mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The Real Talk About Website Problems</span>
          </div>
          
          <h2 className="text-display mb-6">
            <span className="text-foreground">Let's be honest - is your website </span>
            <span className="text-gradient">working for you</span>
            <br />
            <span className="text-foreground">… or against you?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            You work too hard to let a bad website hold you back. These are the most common problems we see with 
            <span className="text-destructive font-semibold"> small business websites</span> every single day:
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="premium-card p-8 group hover:border-destructive/30"
            >
              {/* Problem header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`${problem.color} group-hover:scale-110 transition-transform duration-300`}>
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Stats box */}
              <div className="bg-gradient-to-r from-destructive/5 to-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {problem.stats.label}
                  </span>
                  <TrendingDown className="w-4 h-4 text-destructive" />
                </div>
                <div className="text-3xl font-bold text-destructive mb-1">
                  {problem.stats.value}
                </div>
                <div className="text-sm text-destructive/80">
                  {problem.stats.impact}
                </div>
              </div>

              {/* Consequences */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-destructive" />
                  Business Impact
                </h4>
                <ul className="space-y-2">
                  {problem.consequences.map((consequence, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>{consequence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-destructive/5 via-destructive/10 to-destructive/5 border border-destructive/20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Been There?
          </h3>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every day you wait to fix these problems costs you customers and money. You deserve a website that works as hard as you do. 
            The good news? <span className="text-primary font-semibold">There's a simple solution.</span>
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
            <Zap className="w-5 h-5" />
            <span>Simple solution below ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



