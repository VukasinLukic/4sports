
import React from 'react';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const MockupSection = () => {
  return (
    <section className="section-padding organic-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 fade-in">
          <div className="badge-modern mb-12 mx-auto w-fit">
            <Smartphone className="w-5 h-5 text-primary mr-3" />
            <span className="text-gray-300">Pogledaj</span>
            <span className="ml-2 text-primary font-bold">Aplikaciju</span>
          </div>
          <h2 className="text-balance mb-8 text-white">
            Vidi Kako Izgleda <span className="text-gradient">Naša Aplikacija</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Moderni dizajn prilagođen svim uređajima za najbolje korisničko iskustvo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          {/* Mobile View */}
          <div className="text-center hover-lift">
            <div className="mb-8 flex justify-center">
              <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                width={250}
                height={500}
                className="text-gray-800"
              />
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Smartphone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mobilna Aplikacija</h3>
              <p className="text-gray-300">Potpuno funkcionalna na svim mobilnim uređajima</p>
            </div>
          </div>

          {/* Tablet View */}
          <div className="text-center hover-lift">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-80 h-60 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                      alt="Tablet mockup"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Tablet className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Tablet Verzija</h3>
              <p className="text-gray-300">Optimizovana za tablet uređaje</p>
            </div>
          </div>

          {/* Desktop View */}
          <div className="text-center hover-lift">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-80 h-48 bg-gray-800 rounded-2xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                      alt="Desktop mockup"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Monitor className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Desktop Verzija</h3>
              <p className="text-gray-300">Puna funkcionalnost na desktop računarima</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;
