
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TestimonialsSection as TestimonialsSectionBlock } from "@/components/blocks/testimonials-with-marquee";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      author: {
        name: "Marko Petrović",
        handle: "FK Partizan Youth",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "4sports je revolucionirao način kako upravljamo našim omladinskim klubom. Sve je sada mnogo lakše!",
    },
    {
      author: {
        name: "Ana Jovanović",
        handle: "Tennis Club Novak",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Funkcija praćenja prisustva sama je uštedela nebrojeno sati svakog meseca.",
    },
    {
      author: {
        name: "Stefan Miličić",
        handle: "KK Crvena Zvezda",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
      text: "Neverovatno kako je 4sports pojednostavio organizaciju treninga i komunikaciju sa roditeljima.",
    },
    {
      author: {
        name: "Milica Stojanović",
        handle: "Volleyball Club Vojvodina",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Konačno imamo sve podatke o igračima na jednom mestu. Fantastična platforma!",
    },
    {
      author: {
        name: "Nikola Radović",
        handle: "Football Academy Belgrade",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "4sports nam je omogućio da se fokusiramo na ono što volimo - trening mladih talenata.",
    }
  ];

  return (
    <div id="experiences" className="w-full">
      <TestimonialsSectionBlock
        title={t('testimonials.title')}
        description=""
        testimonials={testimonials}
        className="!py-16"
      />
    </div>
  );
};

export default TestimonialsSection;
