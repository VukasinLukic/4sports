import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MockupShowcase = () => {
  const { t } = useLanguage();

  return (
    <section id="mockup-showcase" className="relative bg-black overflow-hidden">
      {/* Section 1 - Hero with Logo */}
      <div className="relative z-10 py-12 lg:py-16">
        <div className="container px-4 mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-3 mb-5"
          >
            <img
              src="/assets/logo.jpg"
              alt="4sports"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-black text-white">4sports</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-3"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t('mockupShowcase.hero.title')}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-base md:text-lg text-gray-400 mb-5"
          >
            {t('mockupShowcase.hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-6"
          >
            <button className="px-5 py-2.5 bg-primary text-black font-medium text-sm rounded-full hover:bg-primary/90 transition-colors">
              {t('mockupShowcase.hero.cta1')}
            </button>
            <button className="px-5 py-2.5 bg-transparent text-white font-medium text-sm rounded-full border border-white/20 hover:border-white/40 transition-colors">
              {t('mockupShowcase.hero.cta2')}
            </button>
          </motion.div>

          {/* Mockup Image 1 with Grain */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative">
              <img
                src="/assets/mockups/sekcija1.svg"
                alt="Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2 - Features */}
      <div className="relative z-10 py-10 lg:py-12">
        <div className="container px-4 mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-2"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold italic tracking-tight text-white">
              {t('mockupShowcase.features.title')}
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-400 mb-6"
          >
            {t('mockupShowcase.features.subtitle')}
          </motion.p>

          {/* Mockup Image 2 with Grain */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto mb-5"
          >
            <div className="relative">
              <img
                src="/assets/mockups/sekcija2.svg"
                alt="Features"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 bg-transparent border border-primary text-primary font-medium text-sm rounded-full hover:bg-primary hover:text-black transition-all"
            >
              {t('mockupShowcase.features.cta')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Section 3 - Mobile */}
      <div className="relative z-10 py-10 lg:py-12">
        <div className="container px-4 mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-2"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold italic tracking-tight text-white">
              {t('mockupShowcase.mobile.title')}
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-400 mb-6"
          >
            {t('mockupShowcase.mobile.subtitle')}
          </motion.p>

          {/* Mockup Image 3 with Grain */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto mb-5"
          >
            <div className="relative">
              <img
                src="/assets/mockups/sekcija3.svg"
                alt="Mobile App"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-5 py-2.5 bg-transparent border border-primary text-primary font-medium text-sm rounded-full hover:bg-primary hover:text-black transition-all">
              {t('mockupShowcase.mobile.cta')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Section 4 - Analytics */}
      <div className="relative z-10 py-10 lg:py-12 pb-16">
        <div className="container px-4 mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-2"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold italic tracking-tight text-white">
              {t('mockupShowcase.analytics.title')}
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-400 mb-6"
          >
            {t('mockupShowcase.analytics.subtitle')}
          </motion.p>

          {/* Mockup Image 4 with Grain */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto mb-5"
          >
            <div className="relative">
              <img
                src="/assets/mockups/sekcija4.svg"
                alt="Analytics"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-5 py-2.5 bg-transparent border border-primary text-primary font-medium text-sm rounded-full hover:bg-primary hover:text-black transition-all">
              {t('mockupShowcase.analytics.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MockupShowcase;
