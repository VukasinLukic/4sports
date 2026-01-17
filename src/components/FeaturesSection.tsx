import { motion } from 'framer-motion';
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

  const features = [
    {
      category: 'owners',
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

  return (
    <section id="features" className="py-16 lg:py-20 pb-12 lg:pb-16 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
            {t('features.main.title')}
          </h2>
          <p className="text-lg text-gray-500">
            {t('features.main.subtitle')}
          </p>
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-32">
          {features.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div key={category.category}>
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 mb-6">
                    <CategoryIcon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-white">
                    {t(category.titleKey)}
                  </h3>
                  <p className="text-base text-gray-500 max-w-2xl mx-auto">
                    {t(category.subtitleKey)}
                  </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;

                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: itemIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="group relative h-full bg-neutral-950 border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-500">
                          {/* Grain Overlay */}
                          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                          {/* Subtle gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-transparent rounded-3xl transition-all duration-500 pointer-events-none" />

                          <div className="relative">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                              <ItemIcon className="w-6 h-6 text-primary" />
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">
                              {t(item.titleKey)}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {t(item.descKey)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
