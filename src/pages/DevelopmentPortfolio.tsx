
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

type PortfolioItem = {
  id: number;
  title: string;
  imageUrl: string;
  url: string;
  description: string;
  technologies: string[];
  isLoading: boolean;
};

const DevelopmentPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
    {
      id: 1,
      title: "Site d’information et radio en ligne",
     imageUrl: "/GOMA WEBRADIO.JPG",
      url: "https://gomawebradio.com",
      description: "Un site web d’information couplé à une radio en ligne, offrant un accès direct à l’actualité locale et aux émissions en streaming.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      isLoading: true
    },
    {
      id: 2,
      title: "Site d’Artiste",
      imageUrl: "/SandraPink.JPG",
      url: "https://sandrapinklinda.com/",
      description: "Un site web artistique offrant un accès à l’actualités de l'artiste Sandra Pink Linda.",
      technologies: ["HTML", "CSS", "JavaScrip", "blog"],
      isLoading: true
    },
    {
      id: 3,
      title: "GOWERA",
      imageUrl: "/gowera.JPG",
      url: "https://gowera.com",
      description: "Application de radio en ligne.",
      technologies: ["TypeScript", "Radio API"],
      isLoading: true
    },
  ]);

  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        const screenshotAPI = "https://api.apiflash.com/v1/urltoimage";
        const apiKey = "d41d8cd98f00b204e9800998ecf8427e";
        
        const updatedItems = await Promise.all(
          portfolioItems.map(async (item) => {
            try {
              const screenshotUrl = `${screenshotAPI}?access_key=${apiKey}&url=${item.url}&format=jpeg&width=800&height=600`;
              
              console.log(`Would fetch screenshot for ${item.url} using: ${screenshotUrl}`);
              
              return { ...item, isLoading: false };
            } catch (error) {
              console.error(`Error fetching screenshot for ${item.url}:`, error);
              toast({
                title: "Échec du chargement",
                description: `Impossible de charger l'aperçu pour ${item.title}`,
                variant: "destructive",
              });
              return { ...item, isLoading: false };
            }
          })
        );
        
        setPortfolioItems(updatedItems);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les aperçus des sites",
          variant: "destructive",
        });
      }
    };
    
    fetchScreenshots();
  }, []);

  return (
    <div className="min-h-screen bg-darkGray text-white pt-24 pb-16">
      <div className="container">
        <div className="mb-10">
          <Link to="/#services" className="inline-flex items-center text-turquoise hover:underline mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Projets de Développement</h1>
          <p className="text-gray-400">Découvrez mes projets de développement d'applications web et mobiles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-mediumGray rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-turquoise/10 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="h-48 bg-lightGray relative overflow-hidden">
                {item.isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-turquoise"></div>
                  </div>
                ) : null}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <span className="text-xs text-gray-300 font-light">{item.url}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-darkGray px-2 py-1 rounded-full text-turquoise">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-turquoise hover:underline inline-block text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
            <div className="bg-mediumGray max-w-3xl w-full rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="h-64 md:h-80 bg-lightGray relative overflow-hidden">
                {selectedItem.isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-turquoise"></div>
                  </div>
                ) : null}
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-sm text-gray-300 font-light">{selectedItem.url}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{selectedItem.title}</h2>
                <p className="text-gray-300 mb-4">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-darkGray px-2 py-1 rounded-full text-turquoise">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={selectedItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-turquoise hover:bg-turquoise/90 text-black px-4 py-2 rounded transition-colors"
                  >
                    Voir le projet
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="border border-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
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

export default DevelopmentPortfolio;
