import { useState, useEffect } from 'react';
import { Menu, X, Mail, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, resolvedTheme, changeTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (showThemeMenu && !(event.target as Element).closest('[data-theme-menu]')) {
        setShowThemeMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showThemeMenu]);

  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor className="w-5 h-5" />;
    return resolvedTheme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />;
  };

  const getThemeLabel = (themeValue: string) => {
    const labels = { light: 'Light', dark: 'Dark', system: 'System' };
    return labels[themeValue as keyof typeof labels];
  };


  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
      role="banner"
      style={{ boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none' }}
    >
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Parallax Foundry homepage"
            >
              Parallax Foundry<span className="text-primary">.xyz</span>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 hover:bg-primary/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Style Toggle & Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Enhanced Theme Toggle */}
            <div className="relative" data-theme-menu>
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Current theme: ${getThemeLabel(theme)}`}
                aria-expanded={showThemeMenu}
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="text-foreground group-hover:text-primary transition-colors">
                  {getThemeIcon()}
                </div>
              </button>
              
              {showThemeMenu && (
                <div 
                  className="absolute right-0 top-full mt-2 w-36 bg-background border border-border rounded-xl p-1 animate-scale-in z-50"
                  style={{ boxShadow: 'var(--shadow-lg)' }}
                >
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption}
                      onClick={() => {
                        changeTheme(themeOption);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                        theme === themeOption 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-primary/5 text-foreground'
                      }`}
                    >
                      {themeOption === 'system' && <Monitor className="w-4 h-4" />}
                      {themeOption === 'light' && <Sun className="w-4 h-4" />}
                      {themeOption === 'dark' && <Moon className="w-4 h-4" />}
                      <span className="text-sm font-medium">{getThemeLabel(themeOption)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-px h-8 bg-border opacity-50"></div>

            <a 
              href="mailto:hello@example.com" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 hover:scale-105 group"
              aria-label="Email us at hello@example.com"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              <span className="font-medium text-sm">hello@example.com</span>
            </a>
            
            <a href="#contact">
              <Button variant="premium" size="sm" className="px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Let's Chat
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border" id="mobile-menu">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full justify-center px-6 py-3 text-sm font-semibold">
                    Let's Chat
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};


