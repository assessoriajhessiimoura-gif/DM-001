import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Carlos Silva',
    text: 'Atendimento excelente e serviço de primeira, meu motor ficou perfeito. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    text: 'Profissionais muito competentes, serviço rápido e com qualidade. Empresa de confiança!',
    rating: 5,
  },
  {
    name: 'João Oliveira',
    text: 'Levei meu carro com problema sério no motor e resolveram tudo. Ficou como novo!',
    rating: 5,
  },
  {
    name: 'Ana Paula',
    text: 'Ótimo custo-benefício e transparência no serviço. Explicam tudo certinho!',
    rating: 5,
  },
  {
    name: 'Roberto Costa',
    text: 'Equipe muito profissional e estrutura top. Dá pra ver que trabalham com qualidade mesmo!',
    rating: 5,
  },
  {
    name: 'Pedro Henrique',
    text: 'Serviço impecável, entrega dentro do prazo e resultado excelente!',
    rating: 5,
  },
];

export const Reviews = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos <span className="text-orange-500">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Avaliações reais de quem confia no nosso trabalho</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleReviews().map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                  <p className="text-white font-bold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-orange-600 to-orange-500 p-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-orange-600 to-orange-500 p-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-600'
              }`}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
