import { Award, Users, Zap, Target, ShieldCheck, Headphones } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const differentials = [
  { icon: Award, title: 'Equipamentos Modernos', description: 'Tecnologia avançada' },
  { icon: Users, title: 'Profissionais Qualificados', description: 'Equipe especializada' },
  { icon: Zap, title: 'Agilidade na Entrega', description: 'Rapidez garantida' },
  { icon: Target, title: 'Alto Padrão de Qualidade', description: 'Excelência em cada serviço' },
  { icon: ShieldCheck, title: 'Confiança e Segurança', description: 'Trabalho certificado' },
  { icon: Headphones, title: 'Atendimento Transparente', description: 'Comunicação clara' },
];

export const Differentials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`text-center mb-20 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-orange-500">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">O que nos torna referência no mercado</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 rounded-xl transition-all duration-500"></div>

              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/50">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
