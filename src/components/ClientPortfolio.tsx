import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Users, TrendingUp, Calendar, ShoppingCart, MessageSquare, Palette, Truck } from 'lucide-react';

interface Client {
  domain: string;
  industry: string;
  challenge: string;
  solution: string;
  visual: string;
  metrics: string[];
  colors: string;
}

const clients: Client[] = [
  {
    domain: "snowmobile-community.example",
    industry: "Snowmobile Community Forum",
    challenge: "Legacy WordPress forum was slow and hard to maintain with poor mobile experience",
    solution: "Migrated to custom React application with modern forum features and lightning-fast performance",
    visual: "Forum homepage with latest posts, categories, and user profiles",
    metrics: ["Active member count", "Daily post frequency", "Thread engagement"],
    colors: "#FF6B35, #1a1a1a"
  },
  {
    domain: "totallyamaha.com",
    industry: "Snowmobile Community and Event Organization",
    challenge: "WordPress site couldn't handle event registrations and was frequently down during peak season",
    solution: "Built modern Astro-powered site with React components for events, 10x faster load times",
    visual: "Event calendar, ride maps, and discussion boards",
    metrics: ["Event attendance", "Community participation", "Member growth"],
    colors: "#0066CC, #FF0000"
  },
  {
    domain: "outdoor-enthusiasts.example",
    industry: "Snowmobile Community Forum",
    challenge: "Outdated WordPress theme was mobile-unfriendly and had poor SEO performance",
    solution: "Complete rebuild using Astro for optimal SEO and performance with modern responsive design",
    visual: "Forum layout with threads and posts",
    metrics: ["Community growth", "Active users", "Post frequency"],
    colors: "#FF6600, #003366"
  },
  {
    domain: "autogator.com",
    industry: "Used Automotive Parts Retail",
    challenge: "WordPress + WooCommerce couldn't handle large inventory and was slow for customers",
    solution: "Custom React e-commerce platform with advanced search, 50% faster checkout process",
    visual: "Parts search interface with filters for make, model, year, etc.",
    metrics: ["Inventory accuracy", "Sales volume", "Customer satisfaction"],
    colors: "#1E40AF, #10B981"
  },
  {
    domain: "teamprepstarz.com",
    industry: "Youth Sports Development",
    challenge: "Providing training programs and opportunities for young athletes",
    solution: "Online platform for program registration and athlete development tracking",
    visual: "Program listings, registration forms, and progress dashboards",
    metrics: ["Registered users", "Program enrollments", "Athlete progress"],
    colors: "#DC2626, #059669"
  },
  {
    domain: "atcsforall.com",
    industry: "Art Community and Trading Platform",
    challenge: "Building a supportive community for ATC trading and mail art",
    solution: "Member-run website with forums, galleries, and trading systems",
    visual: "User profiles, ATC galleries, forum threads",
    metrics: ["Member count", "Active trades", "Forum activity"],
    colors: "#FFD700, #4B0082"
  },
  {
    domain: "rosevillerocksupply.com",
    industry: "Construction Materials Supply",
    challenge: "Efficiently managing orders and deliveries of construction materials",
    solution: "Online ordering system with product catalog, inventory management, and delivery scheduling",
    visual: "Product catalog, ordering interface, and delivery tracking",
    metrics: ["Order fulfillment rate", "Delivery timeliness", "Inventory levels"],
    colors: "#8B4513, #FF8C00"
  }
];

const getIndustryIcon = (industry: string) => {
  if (industry.includes('Community') || industry.includes('Forum')) return <Users className="w-6 h-6" />;
  if (industry.includes('Retail') || industry.includes('Parts')) return <ShoppingCart className="w-6 h-6" />;
  if (industry.includes('Sports')) return <TrendingUp className="w-6 h-6" />;
  if (industry.includes('Art')) return <Palette className="w-6 h-6" />;
  if (industry.includes('Supply')) return <Truck className="w-6 h-6" />;
  if (industry.includes('Event')) return <Calendar className="w-6 h-6" />;
  return <MessageSquare className="w-6 h-6" />;
};

const getIndustryCategory = (industry: string) => {
  if (industry.includes('Community') || industry.includes('Forum') || industry.includes('Art')) return 'Community Platforms';
  if (industry.includes('Retail') || industry.includes('Parts') || industry.includes('Supply')) return 'E-commerce & Retail';
  if (industry.includes('Sports') || industry.includes('Event')) return 'Services & Events';
  return 'Other';
};

export const ClientPortfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const getColorFromString = (colorString: string) => {
    const colors = colorString.split(',').map(c => c.trim());
    return colors[0];
  };

  const categories = ['All', ...Array.from(new Set(clients.map(client => getIndustryCategory(client.industry))))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClients = selectedCategory === 'All' 
    ? clients 
    : clients.filter(client => getIndustryCategory(client.industry) === selectedCategory);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            From passionate communities to specialized e-commerce, we create custom solutions that help 
            <span className="text-primary font-semibold"> unique businesses thrive online</span>.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg hover:scale-105'
                  : 'bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.domain}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer hover-lift"
              onClick={() => setSelectedClient(client)}
            >
              <div className="premium-card p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl text-white shadow-lg"
                    style={{ backgroundColor: getColorFromString(client.colors) }}
                  >
                    {getIndustryIcon(client.industry)}
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {client.domain}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-3">
                  {client.industry}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {client.challenge}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {client.metrics.slice(0, 2).map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client modal */}
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl text-white"
                    style={{ backgroundColor: getColorFromString(selectedClient.colors) }}
                  >
                    {getIndustryIcon(selectedClient.industry)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedClient.domain}
                    </h3>
                    <p className="text-primary font-medium">{selectedClient.industry}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{selectedClient.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Our Solution</h4>
                  <p className="text-muted-foreground">{selectedClient.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Key Features</h4>
                  <p className="text-muted-foreground">{selectedClient.visual}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Success Metrics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">7+</div>
              <div className="text-sm text-muted-foreground">Diverse Industries</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Custom Solutions</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">5★</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


