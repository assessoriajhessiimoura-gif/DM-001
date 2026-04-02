import { useScrollAnimation } from '../hooks/useScrollAnimation';

// IMPORTS (ESSA É A DIFERENÇA 🔥)
import capa from "../assets/Picsart_26-04-01_22-07-15-322.png";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export const Gallery = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const galleryItems = [
    { type: "image", src: capa },
    { type: "image", src: foto1 },
    { type: "image", src: foto2 },
    { type: "image", src: foto3 },
    { type: "video", src: video1 },
    { type: "video", src: video2 },
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

              {/* IMAGEM */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={`Serviço ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* VÍDEO */}
              {item.type === "video" && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXTO */}
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
