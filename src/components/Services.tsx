
import { Monitor, Smartphone, Bookmark } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  linkText 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  linkText: string 
}) => {
  return (
    <div className="service-card group">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-md bg-darkGray flex items-center justify-center text-turquoise group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <a href="#" className="text-turquoise hover:underline inline-block">{linkText}</a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section bg-darkGray">
      <div className="container">
        <div className="text-center mb-16">
          <h3 className="text-gray-400 mb-3">Ce que je fais</h3>
          <h2 className="section-title">Mes services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Monitor}
            title="Web design"
            description="Je suis capable de transformer vos idées en un site web pour l'image numérique de votre entreprise"
            linkText="Voir mes travaux"
          />
          
          <ServiceCard 
            icon={Bookmark}
            title="WordPress"
            description="Je suis spécialisé pour structurer vos idées en un site web utilisant WordPress, pour améliorer l'image numérique de votre entreprise"
            linkText="Voir mes travaux"
          />
          
          <ServiceCard 
            icon={Smartphone}
            title="Développement"
            description="Propulsez l'image numérique de votre entreprise avec mon expertise pointue en développement mobile d'applications."
            linkText="Voir mes travaux"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
