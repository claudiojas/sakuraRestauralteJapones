import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="reservas" className="bg-secondary pt-20 pb-8 relative overflow-hidden">
      {/* Wave Pattern */}
      <div className="absolute inset-0 pattern-waves opacity-20" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-secondary-foreground/10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-secondary-foreground mb-4">
              桜 <span className="text-accent">SAKURA</span>
            </h3>
            <p className="text-secondary-foreground/60 leading-relaxed mb-6">
              Uma experiência gastronômica japonesa autêntica no coração da cidade. 
              Tradição, sabor e hospitalidade em cada detalhe.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/60">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span>Rua das Cerejeiras, 123<br />Jardim Oriental - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/60">
                <Phone size={20} className="text-accent shrink-0" />
                <span>(11) 99999-8888</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-6">Horários</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/60">
                <Clock size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-secondary-foreground">Terça a Domingo</div>
                  <div>Almoço: 12h - 15h</div>
                  <div>Jantar: 19h - 23h</div>
                </div>
              </li>
              <li className="text-secondary-foreground/40 text-sm">
                Segunda-feira: Fechado
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 text-sm">
            © 2025 Sakura Restaurante Japonês. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/40 hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-secondary-foreground/40 hover:text-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Large Decorative Kanji */}
      <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
        <span className="font-display text-[400px] text-secondary-foreground leading-none">
          桜
        </span>
      </div>
    </footer>
  );
};

export default Footer;
