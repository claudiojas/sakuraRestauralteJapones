import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, UtensilsCrossed, Info, CalendarDays } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#cardapio', label: 'Cardápio' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#galeria', label: 'Galeria' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl text-primary-foreground tracking-wider">
              桜 <span className="text-accent">SAKURA</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground font-medium underline-animate transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="lg">
            Pedir Agora
          </Button>
        </div>
      </motion.header>

      {/* Mobile Top Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="font-display text-xl text-primary-foreground">
            桜 <span className="text-accent">SAKURA</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/95 z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl text-secondary-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="hero" size="xl" onClick={() => setIsMobileMenuOpen(false)}>
                Pedir Agora
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-light border-t border-border/50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Início', href: '#' },
            { icon: UtensilsCrossed, label: 'Cardápio', href: '#cardapio' },
            { icon: Info, label: 'Sobre', href: '#sobre' },
            { icon: CalendarDays, label: 'Reservas', href: '#reservas' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors active:scale-90"
            >
              <item.icon size={22} />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
