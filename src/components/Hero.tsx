import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="inicio" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Diseñando el Futuro<br />de la Arquitectura
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Creamos espacios únicos que combinan funcionalidad, estética y sostenibilidad
        </p>
        <a
          href="#proyectos"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          Ver Proyectos
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}