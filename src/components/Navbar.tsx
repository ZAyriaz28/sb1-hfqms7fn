import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">ARQWIN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-900 hover:text-gray-600">Inicio</a>
            <a href="#proyectos" className="text-gray-900 hover:text-gray-600">Proyectos</a>
            <a href="#servicios" className="text-gray-900 hover:text-gray-600">Servicios</a>
            <a href="#nosotros" className="text-gray-900 hover:text-gray-600">Nosotros</a>
            <a href="#contacto" className="text-gray-900 hover:text-gray-600">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#inicio" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Inicio</a>
            <a href="#proyectos" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Proyectos</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Servicios</a>
            <a href="#nosotros" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Nosotros</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}