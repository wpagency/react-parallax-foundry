import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemsSection } from '@/components/ProblemsSection';
import { TransitionBridge } from '@/components/TransitionBridge';
import { ImpactSection } from '@/components/ImpactSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hidden form for Netlify */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemsSection />
        <TransitionBridge />
        <ImpactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;



