import { useLanguage } from '@/contexts/LanguageContext';
import { GradientButton } from './ui/gradient-button';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary/20 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-emerald-500/20 blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">
                New Platform Available
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight leading-none">
                Your Sports Club
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Simplified
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              The all-in-one platform to manage your sports club.
              <br className="hidden sm:block" />
              <span className="text-white font-medium">Track. Manage. Grow.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            >
              <GradientButton
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group text-base px-12 py-6 min-w-[200px]"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>

              <GradientButton
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('features')}
                className="group text-base px-12 py-6 min-w-[200px]"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </GradientButton>
            </motion.div>

            {/* Simple Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-12 text-center"
            >
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Clubs</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">10k+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Members</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">99%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
