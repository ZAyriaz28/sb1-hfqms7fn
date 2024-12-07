import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    image: string;
    floorPlan: string;
    details: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-600">{project.details}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Plano Arquitectónico</h4>
              <img
                src={project.floorPlan}
                alt={`Plano de ${project.title}`}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}