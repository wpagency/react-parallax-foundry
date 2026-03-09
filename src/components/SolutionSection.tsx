import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  Server, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Award,
  Target,
  Gauge,
  Lock
} from 'lucide-react';

interface SolutionPillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  metric: {
    value: string;
    label: string;
    improvement: string;
  };
  color: string;
}

const solutionPillars: SolutionPillar[] = [
  {
    id: '1',
    icon: <Gauge className="w-8 h-8" />,
    title: 'Lightning-Fast Performance',
    description: 'Your website loads in under 2 seconds, keeping customers happy and Google rankings high. No more losing sales to slow pages.',
    features: [
      'Super-fast loading on all devices',
      'Automatic image optimization',
      'Smart caching that just works',
      'Mobile-first design',
      'Perfect Google speed scores',
      'Works great on slow connections'
    ],
    metric: {
      value: '<2sec',
      label: 'Page Load Time',
      improvement: '3x faster than average'
    },
    color: 'text-primary'
  },
  {
    id: '2',
    icon: <Lock className="w-8 h-8" />,
    title: 'Bulletproof Security',
    description: 'Sleep soundly knowing your website is protected 24/7. We handle all the technical security stuff so you don\'t have to worry.',
    features: [
      'Daily security monitoring',
      'Automatic malware removal',
      'SSL certificates included',
      'Regular security updates',
      'Backup and restore service',
      'Hack protection guarantee'
    ],
    metric: {
      value: '100%',
      label: 'Protection Rate',
      improvement: 'Zero successful attacks'
    },
    color: 'text-success'
  },
  {
    id: '3',
    icon: <Server className="w-8 h-8" />,
    title: 'Rock-Solid Reliability',
    description: 'Your website stays online when you need it most. No more crashed sites during big sales or busy periods.',
    features: [
      'Guaranteed 99.9% uptime',
      'Handles traffic spikes automatically',
      'Multiple server backups',
      'Instant failover protection',
      'Works worldwide, always fast',
      'Real-time monitoring alerts'
    ],
    metric: {
      value: '99.9%',
      label: 'Uptime Guarantee',
      improvement: 'Less than 9 hours down/year'
    },
    color: 'text-accent'
  },
  {
    id: '4',
    icon: <Code className="w-8 h-8" />,
    title: 'Stress-Free Maintenance',
    description: 'We handle all the technical stuff so you can focus on your business. Updates, backups, and fixes happen automatically.',
    features: [
      'Automatic platform updates',
      'Daily backups included', 
      'One-click website restore',
      'Modern framework migrations',
      'Performance optimization',
      'Real human support when needed'
    ],
    metric: {
      value: '0hrs',
      label: 'Your Tech Time',
      improvement: 'We handle everything'
    },
    color: 'text-gold'
  }
];

export const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-navy via-background to-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-6">
            <Award className="w-4 h-4" />
            <span>The Parallax Foundry Way</span>
          </div>
          
          <h2 className="text-display mb-6">
            <span className="text-foreground">Modern Web Solutions</span>
            <br />
            <span className="text-gradient">That Actually Work For You</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Whether it's WordPress, Astro, or React - we build and optimize websites that 
            <span className="text-primary font-semibold"> deliver results</span>. Here's how we make your digital presence work harder:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Trusted by 200+ small businesses</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Average 3x faster websites</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>99.9% uptime promise</span>
            </div>
          </div>
        </motion.div>

        {/* Solution pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="premium-card p-8 group hover:border-primary/30"
            >
              {/* Pillar header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Metric box */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {pillar.metric.label}
                  </span>
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {pillar.metric.value}
                </div>
                <div className="text-sm text-success">
                  {pillar.metric.improvement}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="premium-card p-12 text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Award className="w-10 h-10 text-background" />
            </div>
          </div>
          
          <h3 className="text-headline text-foreground mb-6">
            How We Help Your Business Thrive
          </h3>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't just fix your website - we make it a powerful tool that helps you grow your business. 
            Here's our simple process:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Listen</h4>
              <p className="text-muted-foreground">We learn about your business and understand what you need your website to do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Build</h4>
              <p className="text-muted-foreground">Create a fast, secure, and beautiful website that represents your business perfectly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Support</h4>
              <p className="text-muted-foreground">Keep your website running smoothly while you focus on growing your business</p>
            </div>
          </div>

          <a href="#contact">
            <Button variant="premium" size="xl" className="px-12 py-6 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
              Let's Talk About Your Website
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>

        {/* Results showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <div className="text-4xl font-bold text-gradient mb-2">3x</div>
            <div className="text-sm text-muted-foreground">Faster Websites</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-success/5 to-success/10 border border-success/20">
            <div className="text-4xl font-bold text-success mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Promise</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/20">
            <div className="text-4xl font-bold text-gold mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Happy Businesses</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


