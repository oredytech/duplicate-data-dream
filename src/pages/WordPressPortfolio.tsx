
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type PortfolioItem = {
  id: number;
  title: string;
  imageUrl: string;
  url: string;
  description: string;
};

const WordPressPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Totalement Actus",
      imageUrl: "/lovable-uploads/6a9984fe-a9bb-4fe7-8b59-8222fd6c6332.png",
      url: "https://totalementactus.net/",
      description: "Un site d'actualités générales avec des articles sur différents sujets d'intérêt."
    },
    {
      id: 2,
      title: "Kivu7",
      imageUrl: "/lovable-uploads/6a9984fe-a9bb-4fe7-8b59-8222fd6c6332.png",
      url: "https://kivu7.net",
      description: "Une plateforme d'information régionale couvrant les actualités du Kivu."
    },
    {
      id: 3,
      title: "Radio Tayna",
      imageUrl: "/lovable-uploads/6a9984fe-a9bb-4fe7-8b59-8222fd6c6332.png",
      url: "https://radiotayna.com",
      description: "Site web d'une station de radio proposant des émissions et des podcasts variés."
    },
    {
      id: 4,
      title: "RCVMA",
      imageUrl: "/lovable-uploads/6a9984fe-a9bb-4fe7-8b59-8222fd6c6332.png",
      url: "https://rcvma.net",
      description: "Une plateforme médiatique avec une couverture des événements actuels."
    }
  ];

  return (
    <div className="min-h-screen bg-darkGray text-white pt-24 pb-16">
      <div className="container">
        <div className="mb-10">
          <Link to="/#services" className="inline-flex items-center text-turquoise hover:underline mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Projets WordPress</h1>
          <p className="text-gray-400">Découvrez mes réalisations WordPress personnalisées pour divers clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-mediumGray rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-turquoise/10"
              onClick={() => setSelectedItem(item)}
            >
              <div className="h-48 bg-lightGray relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-turquoise hover:underline inline-block text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visiter le site
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
            <div className="bg-mediumGray max-w-3xl w-full rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="h-64 md:h-80 bg-lightGray relative overflow-hidden">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{selectedItem.title}</h2>
                <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={selectedItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Visiter le site
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn btn-outline"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordPressPortfolio;
