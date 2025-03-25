
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl flex items-center">
            <img 
              src="/lovable-uploads/87061d3a-bd9e-4646-a028-77c0524dc6b5.png" 
              alt="OREDY Technologies Logo" 
              className="h-10 w-auto"
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-turquoise transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-turquoise transition-colors">About</a>
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
            <a href="#about" className="text-white hover:text-turquoise transition-colors py-2">About</a>
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
