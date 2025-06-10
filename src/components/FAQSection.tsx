
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

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
                  <Plus 
                    className={cn(
                      "w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ease-in-out",
                      openIndex === index ? "rotate-45" : "rotate-0"
                    )} 
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 border-t border-white/10 animate-accordion-down">
                  <p className="text-gray-300 leading-relaxed pt-6 text-lg">
                    {t(`faq.questions.${index}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
