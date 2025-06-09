
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 py-12 font-mono">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-primary text-lg font-mono">
              [4sports]
            </div>
            <pre className="text-primary text-xs">
{`┌─ SYSTEM INFO ──┐
│ SPORT_MGMT_APP │
│ VERSION: 2.0   │
│ STATUS: ACTIVE │
└────────────────┘`}
            </pre>
            <p className="text-primary text-xs opacity-80">
              &gt; {t('about.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-primary text-sm">
              $ cat contact.info
            </h3>
            <div className="space-y-2 text-xs">
              <div className="text-primary">
                &gt; EMAIL: {t('footer.email')}
              </div>
              <div className="text-primary">
                &gt; PHONE: {t('footer.phone')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-primary text-sm">
              $ ls quick_links/
            </h3>
            <div className="space-y-2 text-xs">
              <div className="text-primary hover-glow cursor-pointer">
                &gt; {t('navigation.purpose')}
              </div>
              <div className="text-primary hover-glow cursor-pointer">
                &gt; {t('navigation.experiences')}
              </div>
              <div className="text-primary hover-glow cursor-pointer">
                &gt; {t('navigation.faq')}
              </div>
              <div className="text-primary hover-glow cursor-pointer">
                &gt; {t('navigation.contact')}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 text-center">
          <pre className="text-primary text-xs">
{`────────────────────────────────────────────────
  © 2024 4SPORTS | ALL RIGHTS RESERVED
  SYSTEM RUNNING SINCE: ${new Date().getFullYear()}
────────────────────────────────────────────────`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
