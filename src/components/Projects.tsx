import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: 'Casa Moderna Minimalista',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    floorPlan: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    details: 'Diseño minimalista con espacios abiertos y abundante luz natural. 4 habitaciones, 3 baños, sala de estar, cocina integrada y jardín zen.'
  },
  {
    title: 'Torre Corporativa',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    floorPlan: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695394?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    details: 'Edificio de oficinas de 20 pisos con diseño sostenible, espacios colaborativos y tecnología de última generación.'
  },
  {
    title: 'Centro Cultural',
    category: 'Público',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695394?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    floorPlan: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    details: 'Espacio cultural multifuncional con auditorio, galerías de arte, biblioteca y áreas de talleres creativos.'
  },
  {
    title: 'Residencial Eco-Friendly',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    floorPlan: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    details: 'Complejo residencial sostenible con paneles solares, sistema de recolección de agua y jardines comunitarios.'
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600">Descubre nuestra selección de proyectos destacados</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}