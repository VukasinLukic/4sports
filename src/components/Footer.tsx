import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, ArrowUp, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description - LEFT SIDE */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={scrollToTop}>
              <img
                src="/assets/logo.jpg"
                alt="4sports Logo"
                className="h-12 w-12 rounded-lg object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-black bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  4sports
                </span>
                <span className="text-[11px] text-gray-500 font-medium tracking-wider uppercase -mt-1">
                  Club Management
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm text-base leading-relaxed">
              Streamline your sports club operations with our all-in-one management platform. Track attendance, manage payments, and keep everyone connected.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { id: 'about', label: 'About' },
                { id: 'features', label: 'Features' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'faq', label: 'FAQ' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Support
            </h3>
            <div className="space-y-3">
              {['Help Center', 'Documentation', 'Community', 'Contact Support'].map((item) => (
                <div key={item} className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>vukasin4sports@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>+381 11 123 4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 4sports. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-full flex items-center justify-center text-primary transition-all duration-200 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
