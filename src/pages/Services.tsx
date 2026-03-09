import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
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
  Lock,
  Sparkles,
  Globe,
  Rocket,
  Settings
} from 'lucide-react';

interface Service {
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

const services: Service[] = [
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

const additionalServices = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Custom Web Development',
    description: 'Modern websites built with React, Astro, or WordPress - tailored to your exact needs.',
    features: ['Custom design & development', 'Modern framework expertise', 'Responsive design', 'SEO optimization']
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Website Migration',
    description: 'Seamlessly migrate from WordPress to modern frameworks without losing data or rankings.',
    features: ['Zero downtime migration', 'SEO preservation', 'Data integrity', 'Performance improvement']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Ongoing Support',
    description: '24/7 monitoring and support to keep your website running perfectly.',
    features: ['24/7 monitoring', 'Regular updates', 'Performance optimization', 'Technical support']
  }
];

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const additionalRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const additionalInView = useInView(additionalRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-24 bg-gradient-to-br from-navy via-background to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Professional Web Services</span>
              </div>
              
              <h1 className="text-display mb-8">
                <span className="text-foreground">Modern Web Solutions</span>
                <br />
                <span className="text-gradient">That Drive Real Business Growth</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
                From lightning-fast websites to bulletproof security, we deliver complete web solutions that help your business thrive online. No technical headaches, just results.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Trusted Businesses</div>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-success" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Faster Loading</div>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Promise</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact">
                  <Button variant="premium" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    View Our Work
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section ref={servicesRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-6">
                <Target className="w-4 h-4" />
                <span>Core Services</span>
              </div>
              <h2 className="text-headline text-foreground mb-6">Everything Your Website Needs to Succeed</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From blazing-fast performance to rock-solid security, we provide comprehensive web solutions that help your business grow and thrive online.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="premium-card p-8 group hover:border-primary/30"
                >
                  {/* Service header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Metric box */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground font-medium">
                        {service.metric.label}
                      </span>
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {service.metric.value}
                    </div>
                    <div className="text-sm text-success">
                      {service.metric.improvement}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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
          </div>
        </section>

        {/* Additional Services */}
        <section ref={additionalRef} className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm tracking-wide mb-6">
                <Rocket className="w-4 h-4" />
                <span>Specialized Solutions</span>
              </div>
              <h2 className="text-headline text-foreground mb-6">Complete Digital Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From custom development to seamless migrations, we offer specialized services to meet your unique business requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="premium-card p-8 text-center group hover:border-primary/30"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can transform your digital presence.
              </p>
              <a href="#contact">
                <Button variant="premium" size="xl" className="px-12 py-6 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;


