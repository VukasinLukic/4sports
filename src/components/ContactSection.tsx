import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GradientButton } from './ui/gradient-button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrate with Firebase
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get in Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-400">
            Ready to transform your sports club management? Reach out and let's get started.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a href="mailto:vukasin4sports@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      vukasin4sports@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <a href="tel:+381111234567" className="text-gray-400 hover:text-primary transition-colors">
                      +381 11 123 4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">
                      Belgrade, Serbia
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary/10 to-emerald-500/10 backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">Fast Response Time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">Free Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-3">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-3">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-3">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                        placeholder="+381 11 123 4567"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200 resize-none"
                      placeholder="Tell us about your sports club and what you're looking for..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <GradientButton
                    type="submit"
                    size="lg"
                    className="w-full group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>

                  <p className="text-center text-sm text-gray-500">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
