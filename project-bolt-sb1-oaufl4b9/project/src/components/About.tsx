import { Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50">
            <Settings className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-orange-500">DIM Retífica</span>
          </h2>
        </div>

        <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 md:p-16 shadow-2xl border border-gray-700/50 backdrop-blur transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            A <span className="text-orange-500 font-semibold">DIM Retífica de Motores e Cabeçotes</span> atua com excelência no mercado, oferecendo serviços especializados com alto padrão técnico e equipamentos modernos. Nosso compromisso é garantir <span className="text-white font-semibold">desempenho, durabilidade e segurança</span> para cada motor.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mt-6">
            Trabalhamos com <span className="text-orange-500 font-semibold">precisão, responsabilidade e agilidade</span>, sempre focados na satisfação total do cliente. Entregamos soluções confiáveis para veículos leves e pesados.
          </p>
        </div>
      </div>
    </section>
  );
};
