import { CheckIcon, Sparkles } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { GradientButton } from "./ui/gradient-button";
import { motion } from "framer-motion";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Pricing Plans</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400">
            Simple, transparent pricing that grows with you
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Solo Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('pricing.solo.title')}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-white">€29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">
                  {t('pricing.solo.description')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  t('pricing.solo.features.members'),
                  t('pricing.solo.features.attendance'),
                  t('pricing.solo.features.calendar'),
                  t('pricing.solo.features.notifications'),
                  t('pricing.solo.features.support'),
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <GradientButton
                variant="secondary"
                className="w-full"
              >
                {t('pricing.solo.cta')}
              </GradientButton>

              <p className="text-center text-xs text-gray-500 mt-4">
                No credit card required
              </p>
            </div>
          </motion.div>

          {/* Startup Plan - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative md:-mt-4 group"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-4 py-1.5 bg-gradient-to-r from-primary to-emerald-400 rounded-full text-xs font-bold text-white">
                MOST POPULAR
              </div>
            </div>

            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-emerald-500/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            <div className="relative h-full bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-md border-2 border-primary/30 rounded-3xl p-8 md:py-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('pricing.startup.title')}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    €99
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">
                  {t('pricing.startup.description')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  t('pricing.startup.features.members'),
                  t('pricing.startup.features.projects'),
                  t('pricing.startup.features.calendar'),
                  t('pricing.startup.features.integrations'),
                  t('pricing.startup.features.support'),
                  t('pricing.startup.features.analytics'),
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <GradientButton
                className="w-full"
              >
                {t('pricing.startup.cta')}
              </GradientButton>

              <p className="text-center text-xs text-gray-400 mt-4">
                No credit card required
              </p>
            </div>
          </motion.div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col">
              <div className="mb-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('pricing.custom.title')}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-white">Custom</span>
                </div>
                <p className="text-gray-400">
                  {t('pricing.custom.description')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Unlimited Members',
                  'Custom Integrations',
                  'Dedicated Support',
                  'Custom Training',
                  'SLA Guarantee',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <GradientButton
                variant="secondary"
                className="w-full"
              >
                {t('pricing.custom.cta')}
              </GradientButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            All plans include a <span className="text-primary font-semibold">14-day free trial</span>. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
