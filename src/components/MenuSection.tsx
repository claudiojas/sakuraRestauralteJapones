import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Plus, Flame, Leaf } from 'lucide-react';

// Import images
import salmonSashimi from '@/assets/salmon-sashimi.jpg';
import tempura from '@/assets/tempura.jpg';
import beefTeriyaki from '@/assets/beef-teriyaki.jpg';
import misoSoup from '@/assets/miso-soup.jpg';
import specialRolls from '@/assets/special-rolls.jpg';
import ramen from '@/assets/ramen.jpg';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  ingredients: string[];
  calories: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Sashimi de Salmão',
    description: 'Fatias finas de salmão fresco premium',
    price: 'R$ 68,00',
    image: salmonSashimi,
    category: 'Sashimis',
    ingredients: ['Salmão norueguês', 'Shiso', 'Wasabi', 'Gengibre'],
    calories: '180 kcal',
  },
  {
    id: 2,
    name: 'Tempurá de Camarão',
    description: 'Camarões empanados crocantes com molho tentsuyu',
    price: 'R$ 58,00',
    image: tempura,
    category: 'Entradas',
    ingredients: ['Camarão gigante', 'Farinha de tempurá', 'Molho tentsuyu', 'Daikon ralado'],
    calories: '320 kcal',
  },
  {
    id: 3,
    name: 'Beef Teriyaki',
    description: 'Filé mignon grelhado com molho teriyaki caseiro',
    price: 'R$ 88,00',
    image: beefTeriyaki,
    category: 'Pratos Principais',
    ingredients: ['Filé mignon angus', 'Molho teriyaki', 'Gergelim', 'Legumes salteados'],
    calories: '520 kcal',
  },
  {
    id: 4,
    name: 'Missoshiru Tradicional',
    description: 'Sopa de missô com tofu e cebolinha',
    price: 'R$ 22,00',
    image: misoSoup,
    category: 'Sopas',
    ingredients: ['Pasta de missô', 'Tofu sedoso', 'Wakame', 'Cebolinha'],
    calories: '95 kcal',
    isVegetarian: true,
  },
  {
    id: 5,
    name: 'Combinado Especial',
    description: 'Seleção premium de uramakis do chef',
    price: 'R$ 98,00',
    image: specialRolls,
    category: 'Sushis & Makis',
    ingredients: ['Salmão', 'Atum', 'Cream cheese', 'Abacate', 'Manga', 'Tobiko'],
    calories: '480 kcal',
  },
  {
    id: 6,
    name: 'Ramen Tonkotsu',
    description: 'Lamen com caldo cremoso de porco',
    price: 'R$ 62,00',
    image: ramen,
    category: 'Sopas',
    ingredients: ['Caldo de porco 12h', 'Chashu', 'Ovo marinado', 'Nori', 'Negi'],
    calories: '650 kcal',
    isSpicy: true,
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section id="cardapio" className="section-padding bg-background texture-paper" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Nosso Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Cardápio <span className="text-gradient-gold">Exclusivo</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada prato é preparado com dedicação artesanal, respeitando técnicas 
            centenárias e utilizando apenas ingredientes selecionados.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedItem(item)}
                className="card-menu w-full text-left group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  {/* Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.isSpicy && (
                      <span className="bg-primary/90 p-1.5 rounded-full">
                        <Flame size={14} className="text-primary-foreground" />
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="bg-bamboo/90 p-1.5 rounded-full">
                        <Leaf size={14} className="text-bamboo-foreground" />
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-secondary/90 px-3 py-1.5 rounded-md">
                    <span className="font-semibold text-secondary-foreground">{item.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground/60 text-sm mt-12"
        >
          * Imagens meramente ilustrativas. Preços sujeitos a alteração.
        </motion.p>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-lg bg-card">
          {selectedItem && (
            <>
              <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                  {selectedItem.isSpicy && (
                    <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <Flame size={12} /> Picante
                    </span>
                  )}
                  {selectedItem.isVegetarian && (
                    <span className="bg-bamboo/20 text-bamboo text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <Leaf size={12} /> Vegetariano
                    </span>
                  )}
                </div>
                <DialogTitle className="font-display text-2xl text-card-foreground">
                  {selectedItem.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Ingredients */}
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">Ingredientes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Valor calórico aproximado</span>
                  <span className="font-medium text-card-foreground">{selectedItem.calories}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Preço</span>
                    <div className="font-display text-2xl text-primary">{selectedItem.price}</div>
                  </div>
                  <Button variant="hero" size="lg">
                    <Plus size={18} />
                    Adicionar ao Pedido
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuSection;
