
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="font-bold text-xl flex items-center">
            <span className="text-white">OREDY</span>
            <span className="text-xs ml-1 mt-2 text-gray-400">TECHNOLOGIES</span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-turquoise transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-turquoise transition-colors">A bout</a>
          <a href="#services" className="text-white hover:text-turquoise transition-colors">Services</a>
          <a href="#testimonials" className="text-white hover:text-turquoise transition-colors">Témoignages</a>
          <a href="#contact" className="text-white hover:text-turquoise transition-colors">Contacts</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-turquoise transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md animate-fadeIn">
          <div className="container py-5 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-turquoise transition-colors py-2">Home</a>
            <a href="#about" className="text-white hover:text-turquoise transition-colors py-2">A bout</a>
            <a href="#services" className="text-white hover:text-turquoise transition-colors py-2">Services</a>
            <a href="#testimonials" className="text-white hover:text-turquoise transition-colors py-2">Témoignages</a>
            <a href="#contact" className="text-white hover:text-turquoise transition-colors py-2">Contacts</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
