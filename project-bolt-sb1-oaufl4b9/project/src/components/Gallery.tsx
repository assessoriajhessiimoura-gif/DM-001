import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Gallery = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const galleryItems = [
    { src: "/images/1.jpg" },
    { src: "/images/2.jpg" },
    { src: "/images/3.jpg" },
    { src: "/images/4.jpg" },
    { src: "/images/5.jpg" },
    { src: "/images/6.jpg" },
  ];

  return (
    <section ref={elementRef} className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-orange-500">Galeria</span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Veja de perto a qualidade dos nossos serviços e a estrutura da nossa oficina
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >

              {/* IMAGEM AQUI */}
              <img
                src={item.src}
                alt={`Serviço ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY ESCURO (mantido) */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXTO HOVER (mantido) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold">
                  Serviço Profissional {index + 1}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
