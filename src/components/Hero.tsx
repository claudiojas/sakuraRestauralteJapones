import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-sushi.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Japanese Cuisine"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-0.5 bg-accent mx-auto mb-8"
          />

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
            Sabores <span className="text-gradient-gold">Milenares</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Uma experiência gastronômica que transcende o tempo. 
            Tradição japonesa autêntica encontra sofisticação contemporânea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              Fazer Reserva
            </Button>
            <Button variant="hero-outline" size="xl">
              Ver Cardápio
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#sobre"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Descobrir</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>

      {/* Decorative Japanese Character */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
        <span className="font-display text-[200px] text-primary-foreground writing-vertical">
          寿司
        </span>
      </div>
    </section>
  );
};

export default Hero;
