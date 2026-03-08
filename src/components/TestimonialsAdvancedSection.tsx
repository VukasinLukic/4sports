'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'motion/react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';

const testimonialNames = [
  "Marko Đurić",
  "Ivana Lazović",
  "Dragan Kovač",
  "Sandra Milić",
  "Nemanja Stojić",
  "Katarina Peić",
  "Bojan Ristić",
  "Maja Đorđević",
  "Filip Stanković",
];

const TestimonialsAdvancedSection = () => {
  const { t } = useLanguage();

  const testimonials = testimonialNames.map((name, i) => ({
    text: t(`testimonials.items.${i}.text`),
    name,
    role: t(`testimonials.items.${i}.role`),
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section id="testimonials" className="pt-20 lg:pt-24 pb-0 relative overflow-hidden bg-black w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto px-4 mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonials Columns - FULL WIDTH */}
        <div className="w-full flex justify-center gap-6 px-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAdvancedSection;
