import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Nuestro Equipo"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600">
              Somos un estudio de arquitectura comprometido con la excelencia en el diseño y la innovación sostenible.
            </p>
            <div className="space-y-4">
              {[
                'Más de 15 años de experiencia',
                'Equipo de arquitectos especializados',
                'Compromiso con la sostenibilidad',
                'Diseños premiados internacionalmente',
                'Atención personalizada'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}