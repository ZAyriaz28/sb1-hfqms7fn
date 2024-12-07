import React from 'react';
import { Compass, PenTool, Building, Ruler, Users, TreePine } from 'lucide-react';

const services = [
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Diseño Arquitectónico',
    description: 'Creación de espacios únicos y funcionales adaptados a tus necesidades'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Planificación Urbana',
    description: 'Desarrollo de proyectos urbanísticos sostenibles e innovadores'
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Arquitectura Comercial',
    description: 'Diseño de espacios comerciales que maximizan el potencial de tu negocio'
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: 'Remodelaciones',
    description: 'Transformación y renovación de espacios existentes'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Consultoría',
    description: 'Asesoramiento experto en todas las fases de tu proyecto'
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: 'Arquitectura Sostenible',
    description: 'Diseños ecológicos que respetan el medio ambiente'
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Soluciones arquitectónicas integrales para cada necesidad</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}