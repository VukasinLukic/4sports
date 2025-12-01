import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users, Dumbbell, Building2 } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const roles = [
    {
      icon: Users,
      titleKey: 'about.roles.parents.title',
      descriptionKey: 'about.roles.parents.description',
      features: [
        'about.roles.parents.features.schedules',
        'about.roles.parents.features.attendance',
        'about.roles.parents.features.payments',
      ],
      gradient: 'from-primary/20 to-emerald-500/20',
    },
    {
      icon: Dumbbell,
      titleKey: 'about.roles.coaches.title',
      descriptionKey: 'about.roles.coaches.description',
      features: [
        'about.roles.coaches.features.planning',
        'about.roles.coaches.features.lineup',
        'about.roles.coaches.features.communication',
      ],
      gradient: 'from-emerald-500/20 to-primary/20',
    },
    {
      icon: Building2,
      titleKey: 'about.roles.clubs.title',
      descriptionKey: 'about.roles.clubs.description',
      features: [
        'about.roles.clubs.features.membership',
        'about.roles.clubs.features.payments',
        'about.roles.clubs.features.reports',
      ],
      gradient: 'from-primary/20 to-emerald-400/20',
    },
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl border border-primary/20 bg-black/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <role.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {t(role.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {t(role.descriptionKey)}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {role.features.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-gray-300">
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
