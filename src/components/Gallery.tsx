import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import salmonSashimi from '@/assets/salmon-sashimi.jpg';
import tempura from '@/assets/tempura.jpg';
import beefTeriyaki from '@/assets/beef-teriyaki.jpg';
import specialRolls from '@/assets/special-rolls.jpg';
import ramen from '@/assets/ramen.jpg';
import interiorImage from '@/assets/restaurant-interior.jpg';

const galleryImages = [
  { src: interiorImage, alt: 'Interior do restaurante', span: 'col-span-2 row-span-2' },
  { src: salmonSashimi, alt: 'Sashimi de Salmão', span: 'col-span-1' },
  { src: tempura, alt: 'Tempura', span: 'col-span-1' },
  { src: ramen, alt: 'Ramen', span: 'col-span-1 row-span-2' },
  { src: beefTeriyaki, alt: 'Beef Teriyaki', span: 'col-span-1' },
  { src: specialRolls, alt: 'Rolls Especiais', span: 'col-span-1' },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="galeria" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Nosso Espaço
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-4">
            Ambiente & <span className="text-gradient-gold">Experiência</span>
          </h2>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            Um refúgio de tranquilidade onde a estética japonesa encontra o conforto moderno.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative group rounded-lg overflow-hidden`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-xl text-secondary-foreground">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
