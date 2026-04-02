import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img
              src="/Picsart_26-04-01_22-07-15-322.png"
              alt="DIM Retífica Logo"
              className="relative w-80 md:w-96 h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Retífica de Motores com <span className="text-orange-500">Precisão</span> e <span className="text-orange-500">Alta Performance</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          Especialistas em motores e cabeçotes, entregando qualidade, confiança e durabilidade para o seu veículo
        </p>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative">Solicitar Orçamento Agora</span>
          <svg className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
