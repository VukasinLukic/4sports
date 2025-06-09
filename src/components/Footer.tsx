
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-foreground mb-4">
              4sports
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('about.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                {t('footer.email')}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                {t('footer.phone')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('navigation.contact')}
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Support
            </h3>
            <div className="space-y-2">
              <div className="text-muted-foreground">Help Center</div>
              <div className="text-muted-foreground">Privacy Policy</div>
              <div className="text-muted-foreground">Terms of Service</div>
              <div className="text-muted-foreground">Contact Support</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 4sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
