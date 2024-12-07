import React from 'react';
import { Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    floorPlan: string;
    details: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <span className="text-white/80 text-sm mb-2">{project.category}</span>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-2xl font-bold">{project.title}</h3>
          <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}