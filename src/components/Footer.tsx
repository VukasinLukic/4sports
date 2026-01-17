import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

function StickyFooter({
  children,
  className,
  heightValue = "100dvh",
  ...props
}: {
  children: ReactNode;
  className?: string;
  heightValue?: string;
} & ComponentProps<"div">) {
  return (
    <div
      className="relative"
      style={{
        height: heightValue,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
      }}
      {...props}
    >
      <div
        className={cn("fixed bottom-0 w-full", className)}
        style={{ height: heightValue }}
      >
        {children}
      </div>
    </div>
  );
}

function FooterContent() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 px-6 md:px-12 h-full w-full flex flex-col justify-between relative overflow-hidden">
      {/* Animated Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/30 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-emerald-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Large Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 uppercase text-primary font-bold tracking-wider text-sm">Quick Links</h3>
          {[
            { id: 'home', label: 'Home' },
            { id: 'features', label: 'Features' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'testimonials', label: 'Testimonials' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-400 hover:text-white transition-colors text-left text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 uppercase text-primary font-bold tracking-wider text-sm">Support</h3>
          <p className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Help Center</p>
          <p className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Documentation</p>
          <p className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Community</p>
          <p className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm">Contact Support</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 uppercase text-primary font-bold tracking-wider text-sm">Contact</h3>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            <span>vukasin4sports@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <span>+381 11 123 4567</span>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 uppercase text-primary font-bold tracking-wider text-sm">Follow Us</h3>
          <div className="flex gap-3">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between flex-col gap-6 sm:flex-row items-end mt-12 pt-8 border-t border-white/10">
        <div className="flex items-center">
          <h1 className="text-[12vw] sm:text-[8vw] lg:text-[6vw] font-black leading-[0.85] text-white">
            4sports
          </h1>
        </div>
        <div className="flex flex-col sm:items-end gap-2">
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 4sports. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <StickyFooter
      heightValue="70dvh"
      className="text-white"
    >
      <FooterContent />
    </StickyFooter>
  );
};

export default Footer;
