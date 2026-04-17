import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LineChart,
  CreditCard,
  FileText,
  Database,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  TrendingUp,
  CalendarDays,
  Wallet,
  Activity,
  Bell
} from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('owners');

  const features = [
    {
      category: 'owners',
      tabKey: 'features.owners.tab',
      titleKey: 'features.owners.title',
      subtitleKey: 'features.owners.subtitle',
      icon: LineChart,
      items: [
        {
          icon: LineChart,
          titleKey: 'features.owners.dashboard.title',
          descKey: 'features.owners.dashboard.desc',
        },
        {
          icon: CreditCard,
          titleKey: 'features.owners.memberships.title',
          descKey: 'features.owners.memberships.desc',
        },
        {
          icon: FileText,
          titleKey: 'features.owners.reports.title',
          descKey: 'features.owners.reports.desc',
        },
        {
          icon: Database,
          titleKey: 'features.owners.data.title',
          descKey: 'features.owners.data.desc',
        },
      ],
    },
    {
      category: 'coaches',
      tabKey: 'features.coaches.tab',
      titleKey: 'features.coaches.title',
      subtitleKey: 'features.coaches.subtitle',
      icon: ClipboardCheck,
      items: [
        {
          icon: ClipboardCheck,
          titleKey: 'features.coaches.attendance.title',
          descKey: 'features.coaches.attendance.desc',
        },
        {
          icon: Calendar,
          titleKey: 'features.coaches.calendar.title',
          descKey: 'features.coaches.calendar.desc',
        },
        {
          icon: MessageSquare,
          titleKey: 'features.coaches.communication.title',
          descKey: 'features.coaches.communication.desc',
        },
        {
          icon: TrendingUp,
          titleKey: 'features.coaches.progress.title',
          descKey: 'features.coaches.progress.desc',
        },
      ],
    },
    {
      category: 'parents',
      tabKey: 'features.parents.tab',
      titleKey: 'features.parents.title',
      subtitleKey: 'features.parents.subtitle',
      icon: Bell,
      items: [
        {
          icon: CalendarDays,
          titleKey: 'features.parents.schedule.title',
          descKey: 'features.parents.schedule.desc',
        },
        {
          icon: Wallet,
          titleKey: 'features.parents.payments.title',
          descKey: 'features.parents.payments.desc',
        },
        {
          icon: Activity,
          titleKey: 'features.parents.tracking.title',
          descKey: 'features.parents.tracking.desc',
        },
        {
          icon: Bell,
          titleKey: 'features.parents.notifications.title',
          descKey: 'features.parents.notifications.desc',
        },
      ],
    },
  ];

  const activeFeature = features.find(f => f.category === activeTab);

  return (
    <section id="features" className="py-24 lg:py-32 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none opacity-20" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            {t('features.main.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('features.main.subtitle')}
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {features.map((feature) => (
            <button
              key={feature.category}
              onClick={() => setActiveTab(feature.category)}
              className={`relative px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                activeTab === feature.category
                  ? 'text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              {t(feature.tabKey)}
              {activeTab === feature.category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-white z-[-1]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeFeature && (
            <motion.div
              key={activeFeature.category}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-6xl mx-auto"
            >
              {/* Active Tab Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 mb-8 shadow-2xl backdrop-blur-sm">
                  <activeFeature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  {t(activeFeature.titleKey)}
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {t(activeFeature.subtitleKey)}
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {activeFeature.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="group relative h-full bg-neutral-900/50 border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:bg-neutral-900/80"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                          <ItemIcon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {t(item.titleKey)}
                          </h4>
                          <p className="text-gray-400 leading-relaxed font-medium">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;
