import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra Experiencia</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Experiencia Legal"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Por qué Elegirnos</h3>
            <div className="space-y-4">
              {[
                'Más de 15 años de experiencia en casos exitosos',
                'Equipo de abogados especializados',
                'Atención personalizada y seguimiento continuo',
                'Compromiso con la excelencia y la ética profesional',
                'Soluciones legales innovadoras y efectivas'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <p className="text-lg">
                Nuestro compromiso es brindar el mejor servicio legal, con un enfoque personalizado
                y resultados comprobados en cada caso que manejamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}