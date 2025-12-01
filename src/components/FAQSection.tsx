import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plus, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            {t('faq.title')}
          </h2>
        </motion.div>

        {/* FAQ Items - Reduced Size */}
        <div className="max-w-3xl mx-auto space-y-4">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="font-semibold text-white text-lg pr-4">
                  {t(`faq.questions.${index}.question`)}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Plus
                    className={cn(
                      "w-5 h-5 text-primary transition-transform duration-300 ease-in-out",
                      openIndex === index ? "rotate-45" : "rotate-0"
                    )}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <p className="text-gray-400 leading-relaxed pt-4 text-base">
                    {t(`faq.questions.${index}.answer`)}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
