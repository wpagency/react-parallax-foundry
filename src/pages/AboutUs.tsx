import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Award,
  Target,
  Gauge,
  Code,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Sparkles
} from 'lucide-react';

const AboutUs = () => {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const storiesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.2 });
  const storiesInView = useInView(storiesRef, { once: true, amount: 0.2 });

  const clients = [
    {
      domain: "snowmobile-community.example",
      industry: "Snowmobile Community Forum",
      challenge: "Legacy WordPress forum was slow and hard to maintain with poor mobile experience",
      metrics: ["Active member count", "Daily post frequency", "Thread engagement"],
      category: "Community Platforms"
    },
    {
      domain: "totallyamaha.com", 
      industry: "Snowmobile Community and Event Organization",
      challenge: "WordPress site couldn't handle event registrations and was frequently down during peak season",
      metrics: ["Event attendance", "Community participation"],
      category: "Community Platforms"
    },
    {
      domain: "outdoor-enthusiasts.example",
      industry: "Snowmobile Community Forum", 
      challenge: "Outdated WordPress theme was mobile-unfriendly and had poor SEO performance",
      metrics: ["Community growth", "Active users"],
      category: "Community Platforms"
    },
    {
      domain: "autogator.com",
      industry: "Used Automotive Parts Retail",
      challenge: "WordPress + WooCommerce couldn't handle large inventory and was slow for customers", 
      metrics: ["Inventory accuracy", "Sales volume"],
      category: "E-commerce & Retail"
    },
    {
      domain: "teamprepstarz.com",
      industry: "Youth Sports Development",
      challenge: "Providing training programs and opportunities for young athletes",
      metrics: ["Registered users", "Program enrollments"],
      category: "Services & Events"
    },
    {
      domain: "atcsforall.com",
      industry: "Art Community and Trading Platform", 
      challenge: "Building a supportive community for ATC trading and mail art",
      metrics: ["Member count", "Active trades"],
      category: "Community Platforms"
    },
    {
      domain: "rosevillerocksupply.com",
      industry: "Construction Materials Supply",
      challenge: "Efficiently managing orders and deliveries of construction materials",
      metrics: ["Order fulfillment rate", "Delivery timeliness"],
      category: "Services & Events"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-navy via-background to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-6">
                <Users className="w-4 h-4" />
                <span>About Parallax Foundry</span>
              </div>
              
              <h1 className="text-display mb-8">
                <span className="text-foreground">We Transform</span>
                <br />
                <span className="text-gradient">Digital Dreams Into Reality</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                Behind every successful website is a story of partnership, innovation, and results. We're the team that turns your vision into a digital powerhouse that drives real business growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact">
                  <Button variant="premium" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Start Your Success Story
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Our Services
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Help Your Business Thrive */}
        <section ref={processRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="premium-card p-12 text-center mb-16"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-10 h-10 text-background" />
                </div>
              </div>
              
              <h2 className="text-headline text-foreground mb-6">
                Why Businesses Choose Parallax Foundry
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're not just another web agency. We're your digital growth partners who understand that every business is unique and deserves a website that reflects its potential.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Deep Understanding</h3>
                  <p className="text-muted-foreground">We dive deep into your business goals, challenges, and vision to create solutions that truly fit</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">Modern technology meets creative design to build websites that perform beautifully</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ongoing Partnership</h3>
                  <p className="text-muted-foreground">Your success is our success - we're here for the long haul with continuous support and optimization</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact">
                  <Button variant="premium" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Let's Discuss Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" size="xl" className="px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Explore Our Services
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Showcase */}
        <section ref={resultsRef} className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success font-medium text-sm tracking-wide mb-6">
                <Award className="w-4 h-4" />
                <span>Proven Results</span>
              </div>
              <h2 className="text-headline text-foreground mb-6">The Numbers That Matter</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real businesses who trusted us to transform their digital presence and accelerate their growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-8 mb-16"
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-500 mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Diverse Industries</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Custom Solutions</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-500 mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section ref={storiesRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-6">
                <Users className="w-4 h-4" />
                <span>Real Client Success Stories</span>
              </div>
              
              <h2 className="text-display mb-6">
                <span className="text-foreground">We Build Websites for</span>
                <br />
                <span className="text-gradient">Real Businesses Like Yours</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From passionate communities to specialized e-commerce, we create custom solutions that help unique businesses thrive online.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.domain}
                  initial={{ opacity: 0, y: 30 }}
                  animate={storiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="premium-card p-6 group hover:border-primary/30"
                >
                  {/* Category badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
                    <Sparkles className="w-3 h-3" />
                    <span>{client.category}</span>
                  </div>

                  {/* Domain */}
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary text-sm">{client.domain}</span>
                  </div>

                  {/* Industry */}
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                    {client.industry}
                  </h3>

                  {/* Challenge */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {client.challenge}
                  </p>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-success" />
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {client.metrics.map((metric, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create something amazing together.
              </p>
              <a href="#contact">
                <Button variant="premium" size="xl" className="px-12 py-6 text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                  Start Your Success Story
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

export default AboutUs;


