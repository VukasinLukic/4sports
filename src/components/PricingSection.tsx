import { CheckIcon } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const { t, language } = useLanguage();

  const handlePricingClick = (plan: 'solo' | 'startup' | 'custom') => {
    const messages = {
      en: {
        solo: "Hello, I am interested in the Solo plan (€29/mo). I would like to learn more about this option.",
        startup: "Hello, I am interested in the Startup plan (€99/mo). I would like to learn more about this option.",
        custom: "Hello, I am interested in a Custom plan. I would like to discuss a tailored solution for my sports club."
      },
      sr: {
        solo: "Zdravo, zanima me Solo plan (€29/mesečno). Želeo bih da saznam više o ovoj opciji.",
        startup: "Zdravo, zanima me Startup plan (€99/mesečno). Želeo bih da saznam više o ovoj opciji.",
        custom: "Zdravo, zanima me Custom plan. Želeo bih da razgovaramo o prilagođenom rešenju za moj sportski klub."
      }
    };

    const message = messages[language as 'en' | 'sr'][plan];
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // Wait for scroll to complete, then fill the form
      setTimeout(() => {
        const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (messageTextarea) {
          messageTextarea.value = message;
          messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <section id="pricing" className="pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden relative z-10 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-24"
        >
          <h2 className="mb-6 text-6xl tracking-tighter text-white">
            {t('pricing.title')}
          </h2>
          <p className="text-xl tracking-tight text-white/90">
            {t('pricing.subtitle')}
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {/* Solo Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:w-64 md:w-56 lg:w-64"
          >
            <div className="group relative h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 overflow-hidden">
              {/* Grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px'
              }} />
              <div className="relative p-8 border-b border-neutral-300 dark:border-neutral-600">
                <h4 className="mb-3 text-3xl tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {t('pricing.solo.title')}
                </h4>
                <p className="mb-2 text-lg font-semibold tracking-tight text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {t('pricing.solo.price')}
                </p>
                <p className="tracking-tight text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                  {t('pricing.solo.description')}
                </p>
              </div>
              <div className="relative p-8 pb-6">
                <ul className="mb-6 space-y-3">
                  <FeatureItem>{t('pricing.solo.features.members')}</FeatureItem>
                  <FeatureItem>{t('pricing.solo.features.attendance')}</FeatureItem>
                  <FeatureItem>{t('pricing.solo.features.calendar')}</FeatureItem>
                  <FeatureItem>{t('pricing.solo.features.notifications')}</FeatureItem>
                  <FeatureItem>{t('pricing.solo.features.support')}</FeatureItem>
                </ul>
                <PricingButton onClick={() => handlePricingClick('solo')} noCardRequired={true}>
                  {t('pricing.solo.cta')}
                </PricingButton>
              </div>
            </div>
          </motion.div>

          {/* Startup Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:w-64 md:w-56 lg:w-64"
          >
            <div
              className="group relative p-px overflow-hidden rounded-2xl hover:-translate-y-2 transition duration-500 transform-gpu"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #1f2937 75%, #111827 100%)",
              }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
                <div
                  className="relative p-8"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #1f2937 75%, #111827 100%)",
                  }}
                >
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px'
                  }} />
                  <div className="relative">
                    <h4 className="mb-3 text-3xl text-white tracking-tighter">
                      {t('pricing.startup.title')}
                    </h4>
                    <p className="mb-2 text-lg text-white font-semibold tracking-tighter">
                      {t('pricing.startup.price')}
                    </p>
                    <p className="text-white/90 tracking-tight text-sm">
                      {t('pricing.startup.description')}
                    </p>
                  </div>
                </div>
                <div className="relative p-8 pb-6">
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px'
                  }} />
                  <ul className="mb-6 space-y-3">
                    <FeatureItem>{t('pricing.startup.features.members')}</FeatureItem>
                    <FeatureItem>{t('pricing.startup.features.projects')}</FeatureItem>
                    <FeatureItem>{t('pricing.startup.features.calendar')}</FeatureItem>
                    <FeatureItem>{t('pricing.startup.features.integrations')}</FeatureItem>
                    <FeatureItem>{t('pricing.startup.features.support')}</FeatureItem>
                    <FeatureItem>{t('pricing.startup.features.analytics')}</FeatureItem>
                  </ul>
                  <PricingButton onClick={() => handlePricingClick('startup')} noCardRequired={true}>
                    {t('pricing.startup.cta')}
                  </PricingButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:w-64 md:w-56 lg:w-64"
          >
            <div className="group relative flex flex-col justify-between h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 overflow-hidden">
              {/* Grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px'
              }} />
              <div className="relative p-8">
                <h4 className="mb-3 text-3xl tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {t('pricing.custom.title')}
                </h4>
                <p className="mb-2 text-lg font-semibold tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {t('pricing.custom.price')}
                </p>
                <p className="tracking-tight text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                  {t('pricing.custom.description')}
                </p>
              </div>
              <div className="relative p-8 pb-6">
                <PricingButton onClick={() => handlePricingClick('custom')}>
                  {t('pricing.custom.cta')}
                </PricingButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center">
      <CheckIcon className="size-3 mr-2.5 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 flex-shrink-0" />
      <span className="font-medium tracking-tight text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  onClick,
  noCardRequired,
}: {
  children: string;
  onClick?: () => void;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-full px-5 py-3.5 text-center text-sm font-semibold tracking-tight bg-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white border dark:hover:bg-white dark:hover:text-neutral-800 hover:scale-105 border-neutral-400 dark:border-neutral-600 rounded-lg transition duration-200"
      >
        {children}
      </button>
      {noCardRequired && (
        <span className="block mt-2 text-xs text-neutral-500 dark:text-neutral-600 tracking-tight">
          No credit card required
        </span>
      )}
    </>
  );
};
