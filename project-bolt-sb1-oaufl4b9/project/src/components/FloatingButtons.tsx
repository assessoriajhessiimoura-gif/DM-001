import { MessageCircle, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappNumber = '553131973228099';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento.`;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white animate-pulse" />
      </a>

      <button
        onClick={scrollToContact}
        className={`fixed bottom-24 right-6 z-50 bg-gradient-to-r from-orange-600 to-orange-500 p-4 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Solicitar orçamento"
      >
        <FileText className="w-7 h-7 text-white" />
      </button>
    </>
  );
};
