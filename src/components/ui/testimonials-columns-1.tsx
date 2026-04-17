"use client";
import React from "react";
import { motion } from "motion/react";
import { UserCircle } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={`fragment-${index}`}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <div className="p-10 rounded-3xl border border-primary/20 shadow-lg shadow-primary/10 max-w-xs w-full bg-black/40 backdrop-blur-sm" key={`testimonial-${index}-${i}`}>
                <div className="text-gray-300">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <UserCircle className="w-7 h-7 text-gray-500" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight text-gray-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
