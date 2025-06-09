
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-80 h-80 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 fade-in">
          <div className="badge-modern mb-12 mx-auto w-fit">
            <HelpCircle className="w-5 h-5 text-primary mr-3" />
            <span className="text-gray-300">Help</span>
            <span className="ml-2 text-primary font-bold">Center</span>
          </div>
          <h2 className="text-balance mb-12 text-white">
            {t('faq.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden hover-lift">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-8 flex justify-between items-center hover:bg-white/5 transition-all duration-300"
              >
                <span className="font-bold text-white text-xl">
                  {t(`faq.questions.${index}.question`)}
                </span>
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-3 ml-6">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed pt-6 text-lg">
                    {t(`faq.questions.${index}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-20 w-5 h-5 rounded-full opacity-70 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)', animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full opacity-60 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #15803d, #22c55e)', animationDelay: '2s'}}></div>
    </section>
  );
};

export default FAQSection;
