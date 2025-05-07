
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
                      src="/lovable-uploads/cf0c9765-b0b7-401c-95ef-ca0fe62ee39d.png" 
                      alt="OREDY" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">OREDY MUSANDA</h3>
                  <p className="text-turquoise">Développeur Frontend</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-turquoise mb-2">Contact</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Email: contact@oredytech.com</li>
                      <li>Téléphone: +243 996 886 079</li>
                      <li>Localisation: Goma, RDC/NORD-KIVU</li>
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
                  <li>Français - Courant</li>
                  <li>Anglais - Professionnel</li>
                  <li>Swahili - Natif</li>
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
                    <h4 className="font-semibold">Radio Diffuseur</h4>
                    <p className="text-turquoise text-sm mb-2">Radio TAYNA | 2018 - 2024</p>
                    <p className="text-gray-300 text-sm">
                      Passionné par la technique et la transmission, j’ai veillé à ce que 
                      chaque onde porte une histoire, chaque fréquence une émotion.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Webmaster</h4>
                    <p className="text-turquoise text-sm mb-2">Radio TAYNA | 2022 - 2024</p>
                    <p className="text-gray-300 text-sm">
                      Gestion et mise à jour de contenu web, administration de CMS WordPress,
                      création de newsletters, et Maintenance du site web.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Formation</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Autodidacte en Développement Web</h4>
                    <p className="text-turquoise text-sm mb-2">Sites des formations en ligne | 2017 - Présent</p>
                    <p className="text-gray-300 text-sm">
                      Spécialisation en technologies web modernes, gestion de projets numériques.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-turquoise pl-4 relative">
                    <div className="absolute w-3 h-3 bg-turquoise rounded-full -left-[7px] top-0"></div>
                    <h4 className="font-semibold">Graguat en Communication</h4>
                    <p className="text-turquoise text-sm mb-2">Université du CAPROMAD | 2020 - 2023</p>
                    <p className="text-gray-300 text-sm">
                      Formation générale en communication, Journalisme et Marketing.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Certifications</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">React Developer</h4>
                    <p className="text-turquoise text-sm">Udemy | 2024</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">UI/UX Design</h4>
                    <p className="text-turquoise text-sm">Auto-formation | 2023</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">JavaScript Advanced</h4>
                    <p className="text-turquoise text-sm">Udemy | 2022</p>
                  </div>
                  
                  <div className="border border-lightGray rounded p-3 hover:border-turquoise transition-colors">
                    <h4 className="font-semibold">WordPress Expert</h4>
                    <p className="text-turquoise text-sm">Auto-formation | 2018</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-mediumGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-turquoise">Projets Personnels</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Goma Webradio</h4>
                    <p className="text-gray-300 text-sm">
                      Développement d’un site web d’information couplé à une radio en ligne,
                      offrant un accès direct à l’actualité locale et aux émissions en streaming.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">GOWERA</h4>
                    <p className="text-gray-300 text-sm">
                      Un projet visant à offrir une plateforme de streaming radio gratuite, 
                      connectant les auditeurs aux stations du monde entier en un clic.
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
            <a 
              href="/assets/OREDY_CV.pdf" 
              download="OREDY_MUSANDA_CV.pdf"
              className="btn btn-primary inline-flex items-center justify-center"
            >
              <Download className="mr-2" size={18} />
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
