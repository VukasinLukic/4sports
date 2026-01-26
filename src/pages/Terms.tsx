import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          {t('terms.backToHome')}
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('terms.title')}
          </h1>
          <p className="text-gray-400 mb-12">
            {t('terms.lastUpdated')}
          </p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('terms.section1.title')}
              </h2>
              <p className="leading-relaxed">
                {t('terms.section1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('terms.section2.title')}
              </h2>
              <p className="leading-relaxed">
                {t('terms.section2.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('terms.section3.title')}
              </h2>
              <p className="leading-relaxed">
                {t('terms.section3.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('terms.section4.title')}
              </h2>
              <p className="leading-relaxed">
                {t('terms.section4.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('terms.section5.title')}
              </h2>
              <p className="leading-relaxed">
                {t('terms.section5.content')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
