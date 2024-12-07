import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">ARQWIN</span>
            </div>
            <p className="text-gray-400">
              Creando espacios extraordinarios desde 2008
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#proyectos" className="text-gray-400 hover:text-white">Proyectos</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Diseño Arquitectónico</li>
              <li className="text-gray-400">Planificación Urbana</li>
              <li className="text-gray-400">Arquitectura Comercial</li>
              <li className="text-gray-400">Consultoría</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes</li>
              <li>9:00 - 18:00</li>
              <li>Sábados</li>
              <li>10:00 - 14:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arqwin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}