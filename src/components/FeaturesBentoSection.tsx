import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import MagicBento from './MagicBento';

const FeaturesBentoSection = () => {
  const { t } = useLanguage();

  const bentoCards = [
    {
      color: '#060010',
      title: t('features.calendar.title'),
      description: t('features.calendar.description'),
      label: 'Calendar'
    },
    {
      color: '#060010',
      title: t('features.members.title'),
      description: t('features.members.description'),
      label: 'Members'
    },
    {
      color: '#060010',
      title: t('features.attendance.title'),
      description: t('features.attendance.description'),
      label: 'Tracking'
    },
    {
      color: '#060010',
      title: t('features.payments.title'),
      description: t('features.payments.description'),
      label: 'Payments'
    },
    {
      color: '#060010',
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      label: 'Analytics'
    },
    {
      color: '#060010',
      title: t('features.scheduling.title'),
      description: t('features.scheduling.description'),
      label: 'Scheduling'
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">
              {t('features.badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {t('features.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* MagicBento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="34, 197, 94"
            cards={bentoCards}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesBentoSection;
