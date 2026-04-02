import { MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTA = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
      </div>

      <div className={`container mx-auto px-6 max-w-5xl relative z-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Seu Motor Precisa de Cuidado Profissional?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
          Fale agora com um especialista e solicite seu orçamento sem compromisso
        </p>
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-orange-500 bg-white rounded-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
          <span>Solicitar Orçamento</span>
        </button>
      </div>
    </section>
  );
};
