
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              4sports
            </div>
            <p className="text-muted-foreground">
              {t('about.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t('footer.contact')}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{t('footer.phone')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.purpose')}
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.experiences')}
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.faq')}
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navigation.contact')}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
