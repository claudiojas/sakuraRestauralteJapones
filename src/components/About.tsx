import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import interiorImage from '@/assets/restaurant-interior.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="section-padding bg-secondary relative overflow-hidden" ref={ref}>
      {/* Subtle Pattern */}
      <div className="absolute inset-0 pattern-waves opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Nossa Filosofia
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-6 leading-tight">
              Tradição &<br />
              <span className="text-gradient-gold">Modernidade</span>
            </h2>
            
            <div className="space-y-4 text-secondary-foreground/70 leading-relaxed">
              <p>
                Há mais de duas décadas, o Sakura celebra a arte culinária japonesa em sua forma mais 
                pura e refinada. Cada prato é uma homenagem aos mestres itamae que nos inspiram diariamente.
              </p>
              <p>
                Nossos ingredientes são selecionados com rigor absoluto – peixes frescos importados 
                semanalmente, arroz cultivado especialmente para sushi, e vegetais orgânicos de 
                produtores locais.
              </p>
              <p>
                A experiência Sakura vai além da refeição: é uma jornada sensorial que honra o 
                conceito japonês de <em className="text-accent">Omotenashi</em> – a arte da 
                hospitalidade genuína e atenciosa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-secondary-foreground/10">
              {[
                { number: '25+', label: 'Anos de Tradição' },
                { number: '50k+', label: 'Clientes Satisfeitos' },
                { number: '100%', label: 'Ingredientes Premium' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl text-accent">{stat.number}</div>
                  <div className="text-sm text-secondary-foreground/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={interiorImage}
                alt="Interior do Restaurante Sakura"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>

            {/* Floating Accent Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-lg shadow-lg hidden md:block"
            >
              <div className="font-display text-6xl text-primary-foreground leading-none">桜</div>
              <div className="text-primary-foreground/80 text-sm mt-2">Sakura</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
