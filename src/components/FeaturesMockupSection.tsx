
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { Calendar, Users, MessageCircle, Clock, CheckCircle, CreditCard } from 'lucide-react';

const FeaturesMockupSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: "Home Page",
        subtitle: "Intuitive navigation and quick access to all functions"
      },
      functionalities: [
        { icon: Calendar, title: "Smart Calendar", desc: "Schedule training sessions and matches with ease" },
        { icon: Clock, title: "Appointment Scheduling", desc: "Efficiently organize training sessions and events" }
      ]
    },
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: "Profile",
        subtitle: "Personalized experience tailored to your needs"
      },
      functionalities: [
        { icon: Users, title: "Member Management", desc: "Track all club members and their progress" },
        { icon: CheckCircle, title: "Attendance Tracking", desc: "Monitor who's present at each session" }
      ]
    },
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: "Chat & Notifications",
        subtitle: "Fast communication and always current information"
      },
      functionalities: [
        { icon: CreditCard, title: "Payment Management", desc: "Handle membership fees and payments seamlessly" }
      ]
    }
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            See How Our <span className="text-gradient">Application Looks</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Modern design adapted to all devices for the best user experience
          </p>
          
          {/* About section */}
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">What is 4sports?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive platform designed specifically for sports clubs to manage members, 
              track attendance, handle payments, and communicate with parents - all in one place.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Mockup */}
                <div className={`flex justify-center ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <Iphone16Pro
                      src={feature.mockup.src}
                      width={320}
                      height={640}
                      className="relative z-10"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-3">{feature.mockup.title}</h3>
                    <p className="text-lg text-gray-300 mb-8">{feature.mockup.subtitle}</p>
                  </div>

                  <div className="space-y-6">
                    {feature.functionalities.map((func, funcIndex) => {
                      const IconComponent = func.icon;
                      return (
                        <div key={funcIndex} className="glass-card p-6 rounded-2xl">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-white mb-2">{func.title}</h4>
                              <p className="text-gray-300">{func.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-32">
          <div className="glass-card p-12 rounded-3xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Complete Solution</h3>
            <p className="text-xl text-gray-300 mb-12">
              Mobile application for users and advanced desktop panel for owners - everything you need in one place
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Analytics</h5>
                <p className="text-gray-400">Detailed reports and statistics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Management</h5>
                <p className="text-gray-400">Complete control over the club</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Optimization</h5>
                <p className="text-gray-400">Optimized work processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesMockupSection;
