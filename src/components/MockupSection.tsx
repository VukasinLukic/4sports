
import React from 'react';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { Smartphone, Monitor } from 'lucide-react';

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

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Mobile Mockups */}
          <div className="grid grid-cols-2 gap-8">
            {/* Mobile App 1 */}
            <div className="text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <Iphone16Pro
                  src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                  width={200}
                  height={400}
                  className="text-gray-800"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-1">Početna Strana</h4>
                <p className="text-gray-300 text-sm">Intuitivna navigacija</p>
              </div>
            </div>

            {/* Mobile App 2 */}
            <div className="text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <Iphone16Pro
                  src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                  width={200}
                  height={400}
                  className="text-gray-800"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-1">Profil</h4>
                <p className="text-gray-300 text-sm">Personalizovano iskustvo</p>
              </div>
            </div>

            {/* Mobile App 3 */}
            <div className="text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <Iphone16Pro
                  src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                  width={200}
                  height={400}
                  className="text-gray-800"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-1">Chat</h4>
                <p className="text-gray-300 text-sm">Brza komunikacija</p>
              </div>
            </div>

            {/* Mobile App 4 */}
            <div className="text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <Iphone16Pro
                  src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                  width={200}
                  height={400}
                  className="text-gray-800"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-1">Notifikacije</h4>
                <p className="text-gray-300 text-sm">Uvek u toku</p>
              </div>
            </div>
          </div>

          {/* Desktop Owner Panel */}
          <div className="text-center hover-lift">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-96 h-64 bg-gray-800 rounded-2xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                      alt="Desktop owner panel mockup"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <Monitor className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Panel za Vlasnike</h3>
              <p className="text-gray-300 leading-relaxed">
                Kompletna kontrola nad aplikacijom sa detaljnim analytics, 
                upravljanjem korisnicima i naprednim funkcionalnostima
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Features Summary */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Mobilna Aplikacija</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Potpuno funkcionalna na svim mobilnim uređajima sa intuitivnim dizajnom 
              i brzim performansama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;
