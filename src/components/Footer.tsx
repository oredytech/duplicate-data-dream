
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-6 relative">
      <div className="container">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2023 Tout droit réservé | OREDY TECHNOLOGIES
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 w-10 h-10 bg-turquoise rounded-full flex items-center justify-center text-black hover:bg-turquoise/80 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
