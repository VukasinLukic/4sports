import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'motion/react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { Sparkles } from 'lucide-react';

const testimonials = [
  {
    text: "4sports transformed how we manage our football club. Everything is so much easier now!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Milan Jovanović",
    role: "Coach, FK Partizan Youth",
  },
  {
    text: "The attendance tracking feature alone saved us countless hours every month.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Ana Petrović",
    role: "Manager, Tennis Club Novak",
  },
  {
    text: "Implementation was smooth and fast. The support team is exceptional!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Stefan Miličić",
    role: "Director, KK Crvena Zvezda",
  },
  {
    text: "The seamless integration enhanced our business operations and efficiency significantly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Milica Stojanović",
    role: "Admin, Volleyball Club Vojvodina",
  },
  {
    text: "Robust features and quick support have transformed our workflow completely.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Nikola Radović",
    role: "Owner, Football Academy Belgrade",
  },
  {
    text: "Our club functions improved dramatically with this user-friendly design.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Jelena Marković",
    role: "Parent, Swimming Club Tasmajdan",
  },
  {
    text: "They delivered a solution that exceeded expectations and enhanced our operations.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Sanja Đorđević",
    role: "Manager, Basketball Academy",
  },
  {
    text: "Using 4sports, our communication with parents significantly improved.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Aleksandar Ilić",
    role: "Coach, Handball Club Partizan",
  },
  {
    text: "The best investment we made for our sports club management.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Tijana Nikolić",
    role: "Owner, Gymnastics Studio",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsAdvancedSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-24 relative overflow-hidden bg-black w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto px-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Testimonials</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Columns - FULL WIDTH */}
        <div className="w-full flex justify-center gap-6 px-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAdvancedSection;
