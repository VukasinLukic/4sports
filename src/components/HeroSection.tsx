
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = '4sports';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* ASCII Art Logo */}
        <div className="mb-12 font-mono text-primary">
          <pre className="text-xs sm:text-sm leading-tight">
{`
 ██╗  ██╗    ███████╗██████╗  ██████╗ ██████╗ ████████╗███████╗
 ██║  ██║    ██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
 ███████║    ███████╗██████╔╝██║   ██║██████╔╝   ██║   ███████╗
 ╚════██║    ╚════██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
      ██║    ███████║██║     ╚██████╔╝██║  ██║   ██║   ███████║
      ╚═╝    ╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
`}
          </pre>
        </div>

        {/* Typewriter Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-mono text-primary mb-4">
            {displayText}<span className="animate-pulse">|</span>
          </h1>
          <div className="h-px bg-primary w-32 mx-auto mb-6"></div>
        </div>

        {/* Matrix-style subtitle */}
        <div className="mb-12 font-mono">
          <p className="text-sm sm:text-lg text-primary matrix-text">
            &gt; {t('hero.description')}
          </p>
        </div>

        {/* Terminal-style buttons */}
        <div className="space-y-4 font-mono">
          <div className="text-primary text-sm mb-4">
            $ choose_option:
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="border border-primary bg-black text-primary hover:bg-primary hover:text-black px-8 py-3 font-mono"
            >
              [1] {t('hero.cta1')}
            </Button>
            <Button 
              onClick={() => scrollToSection('purpose')}
              className="border border-primary bg-black text-primary hover:bg-primary hover:text-black px-8 py-3 font-mono"
            >
              [2] {t('hero.cta2')}
            </Button>
          </div>
        </div>

        {/* Terminal cursor */}
        <div className="mt-16 text-primary font-mono text-sm">
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
