import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const whatsappNumber = '553131973228099';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = 'https://www.instagram.com/dm_retifica';
  const facebookLink = 'https://www.facebook.com/share/1AshtwjuLz/';

  return (
    <section id="contact" ref={elementRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Estamos prontos para atender você</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
                  <p className="text-gray-400">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone / WhatsApp</h3>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    (31) 3197-3228-099
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:contato@dimretifica.com.br"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    contato@dimretifica.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              <p className="text-gray-400 mb-8">Acompanhe nosso trabalho e novidades</p>

              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gradient-to-r from-green-600 to-green-500 p-5 rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white p-2 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-white font-bold text-lg">WhatsApp</span>
                </a>

                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gradient-to-r from-pink-600 to-purple-500 p-5 rounded-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white p-2 rounded-lg">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="text-white font-bold text-lg">Instagram</span>
                </a>

                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 p-5 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white p-2 rounded-lg">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-white font-bold text-lg">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl mt-16 pt-16 border-t border-gray-800 relative z-10">
        <div className="text-center text-gray-500">
          <p>&copy; 2024 DIM Retífica de Motores e Cabeçotes. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};
