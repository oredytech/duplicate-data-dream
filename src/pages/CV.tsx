
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CV = () => {
  return (
    <div className="min-h-screen bg-darkGray text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-turquoise hover:underline mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Mon Curriculum Vitae</h1>
            <p className="text-gray-400 mb-8">Découvrez mon parcours professionnel et mes compétences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne gauche: Informations personnelles et compétences */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-mediumGray p-6 rounded-lg">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-lightGray mb-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/87061d3a-bd9e-4646-a028-77c0524dc6b5.png" 
                      alt="OREDY" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">OREDY</h3>
                  <p className="text-turquoise">Développeur Frontend</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-turquoise mb-2">Contact</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Email: contact@oredy.com</li>
                      <li>Téléphone: +243 999 999 999</li>
                      <li>Localisation: Goma, RDC</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-mediumGray p-6 rounded-lg">
                <h4 className="font-semibold text-turquoise mb-4">Compétences</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 flex justify-between">
                      <span>HTML/CSS</span>
                      <span>95%</span>
                    </p>
                    <div className="h-2 bg-lightGray rounded">
                      <div className="h-full bg-turquoise rounded" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-1 flex justify-between">
                      <span>JavaScript</span>
                      <span>90%</span>
                    </p>
                    <div className="h-2 bg-lightGray rounded">
                      <div className="h-full bg-turquoise rounded" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-1 flex justify-between">
                      <span>React</span>
                      <span>85%</span>
                    </p>
                    <div className="h-2 bg-lightGray rounded">
                      <div className="h-full bg-turquoise rounded" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-1 flex justify-between">
                      <span>WordPress</span>
                      <span>95%</span>
                    </p>
                    <div className="h-2 bg-lightGray rounded">
                      <div className="h-full bg-turquoise rounded" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-1 flex justify-between">
                      <span>UI/UX Design</span>
                      <span>80%</span>
                    </p>
                    <div className="h-2 bg-lightGray rounded">
                      <div className="h-full bg-turquoise rounded" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h4 className="font-semibold text-turquoise mb-4">Langues</h4>
                <ul className="space-y-2">
                  <li>Français - Natif</li>
                  <li>Anglais - Professionnel</li>
                  <li>Swahili - Courant</li>
                </ul>
              </div>
            </div>
            
            {/* Colonne droite: Expérience et formation */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Expérience Professionnelle</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Développeur Frontend Senior</h4>
                    <p className="text-turquoise text-sm mb-2">OREDY Technologies | 2020 - Présent</p>
                    <p className="text-gray-300 text-sm">
                      Développement de sites web dynamiques et responsives, intégration de CMS,
                      gestion de projets web, collaboration avec des clients internationaux.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Développeur Web</h4>
                    <p className="text-turquoise text-sm mb-2">Digital Agency | 2018 - 2020</p>
                    <p className="text-gray-300 text-sm">
                      Conception et développement de sites web pour divers clients, 
                      optimisation SEO, maintenance et support technique.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Webmaster</h4>
                    <p className="text-turquoise text-sm mb-2">Local Media | 2016 - 2018</p>
                    <p className="text-gray-300 text-sm">
                      Gestion et mise à jour de contenu web, administration de CMS WordPress,
                      création de newsletters et support aux équipes éditoriales.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Formation</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Master en Développement Web</h4>
                    <p className="text-turquoise text-sm mb-2">Université de Technologie | 2014 - 2016</p>
                    <p className="text-gray-300 text-sm">
                      Spécialisation en technologies web modernes, gestion de projets numériques.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Licence en Informatique</h4>
                    <p className="text-turquoise text-sm mb-2">Université des Sciences | 2011 - 2014</p>
                    <p className="text-gray-300 text-sm">
                      Formation générale en informatique, programmation et réseaux.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Certifications</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">React Developer</h4>
                    <p className="text-turquoise text-sm">Meta | 2022</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">WordPress Expert</h4>
                    <p className="text-turquoise text-sm">WordPress Academy | 2021</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">UI/UX Design</h4>
                    <p className="text-turquoise text-sm">Design Institute | 2020</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">JavaScript Advanced</h4>
                    <p className="text-turquoise text-sm">JS Foundation | 2019</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Projets Personnels</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Portfolio Créatif</h4>
                    <p className="text-gray-300 text-sm">
                      Développement d'un portfolio interactif utilisant les dernières technologies web.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Application de Gestion de Tâches</h4>
                    <p className="text-gray-300 text-sm">
                      Création d'une application React pour la gestion de tâches personnelles.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Thème WordPress Premium</h4>
                    <p className="text-gray-300 text-sm">
                      Conception et développement d'un thème WordPress pour professionnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="btn btn-primary inline-flex items-center justify-center">
              Télécharger le CV (PDF)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CV;
