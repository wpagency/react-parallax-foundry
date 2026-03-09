import { Sparkles } from 'lucide-react';
import { StoryPillars } from './storytelling/StoryPillars';
import { AchievementsShowcase } from './storytelling/AchievementsShowcase';
import { ManifestoSection } from './storytelling/ManifestoSection';
import { StorytellingCTA } from './storytelling/StorytellingCTA';

export const PartnershipPositioning = () => {
  return (
    <div className="bg-background">
      {/* Hero Introduction */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide mb-8 shimmer-border">
              <Sparkles className="w-5 h-5" />
              <span>Digital Storytelling Partnership</span>
            </div>
            
            <h2 className="text-display-large mb-8">
              <span className="text-foreground">Every pixel tells</span>
              <br />
              <span className="text-gradient">your story</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              At <span className="text-primary font-semibold">Parallax Foundry</span>, we believe every business has a compelling digital story waiting to be told. 
              <span className="block mt-2"> We're the storytellers who bring your vision to life.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Story Components */}
      <StoryPillars />
      <AchievementsShowcase />
      <ManifestoSection />
      <StorytellingCTA />
    </div>
  );
};


