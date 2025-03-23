
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-darkGray overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/3bfe6d5c-b718-43a3-b6c3-160a00e01a9b.png")' }}></div>
        {/* Overlay foncé pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Dégradé vers le bas pour une transition fluide avec la section suivante */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkGray"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <div 
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bonjour, je suis <span className="text-white">OREDY</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-turquoise">
              Développeur Frontend
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Des designs modernes et fonctionnels, adaptés à vos besoins spécifiques.
              Transformez votre vision en réalité numérique avec notre expertise en création de sites web
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#" className="btn btn-primary">Voir mon CV</a>
              <a href="#contact" className="btn btn-outline">Me contacter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
