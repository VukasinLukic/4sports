
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 font-mono">
          <div className="text-primary text-sm mb-4">
            $ man 4sports
          </div>
          <h2 className="text-2xl md:text-4xl font-mono text-primary mb-6">
            {t('faq.title')}
          </h2>
          <div className="h-px bg-primary w-32 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="ascii-border bg-black hover-glow transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 font-mono text-primary hover-glow"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    [Q{index + 1}] {t(`faq.questions.${index}.question`)}
                  </span>
                  <span className="text-primary">
                    {openIndex === index ? '[-]' : '[+]'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 font-mono border-t border-primary">
                  <div className="text-primary text-xs mt-4 mb-2">
                    &gt; ANSWER:
                  </div>
                  <p className="text-sm text-primary opacity-80 leading-relaxed">
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
