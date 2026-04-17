'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const cooldownRef = useRef(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (cooldownRef.current) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg(t('contact.form.allFieldsRequired') || 'All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMsg(t('contact.form.invalidEmail') || 'Please enter a valid email.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const body = {
      name: formData.name.trim().slice(0, 100),
      email: formData.email.trim(),
      subject: formData.phone.trim()
        ? `Website Contact - Phone: ${formData.phone.trim()}`
        : 'Website Contact Form',
      message: formData.message.trim().slice(0, 5000),
    };

    const url = `${API_URL}/api/v1/contact`;
    console.log('[ContactForm] Submitting to:', url);
    console.log('[ContactForm] Request body:', body);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log('[ContactForm] Response status:', res.status);
      const data = await res.json();
      console.log('[ContactForm] Response data:', data);

      if (res.ok && data.success) {
        console.log('[ContactForm] Success!');
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
          setStatus('idle');
        }, 30000);
      } else {
        console.error('[ContactForm] Server error:', data);
        setStatus('error');
        setErrorMsg(data?.error?.message || t('contact.form.serverError') || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('[ContactForm] Network error:', err);
      console.error('[ContactForm] API_URL was:', API_URL);
      setStatus('error');
      setErrorMsg(t('contact.form.serverError') || 'Failed to send message. Please try again later.');
    }
  }, [formData, t]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="pt-20 pb-32 relative overflow-hidden bg-black">
      {/* Background Pattern - same as testimonials for continuity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            {t('contact.heading')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
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
                    <h3 className="text-white font-semibold mb-2">{t('contact.emailLabel')}</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:mihajlo4sports@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                        mihajlo4sports@gmail.com
                      </a>
                      <a href="mailto:nemanja4sports@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                        nemanja4sports@gmail.com
                      </a>
                      <a href="mailto:vukasin4sports@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                        vukasin4sports@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{t('contact.phoneLabel')}</h3>
                    <a href="tel:+38166493368" className="text-gray-400 hover:text-primary transition-colors">
                      +381 66 493 368
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
                    <h3 className="text-white font-semibold mb-2">{t('contact.locationLabel')}</h3>
                    <p className="text-gray-400">
                      {t('contact.locationValue')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="bg-gradient-to-br from-primary/10 to-emerald-500/10 backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">{t('contact.ourApproach')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">{t('contact.personalSetup')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">{t('contact.continuousSupport')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-300 text-sm">{t('contact.adaptedToYou')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-3">
                      {t('contact.form.name')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-3">
                        {t('contact.form.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-3">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-3">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200 resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    />
                  </div>

                  {/* Submit Button - Matching Navbar Style */}
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="relative w-full px-6 py-3.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Background fill on hover */}
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    {/* Text & Icon */}
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> {t('contact.form.sending') || 'Sending...'}</>
                      ) : status === 'success' ? (
                        <><CheckCircle className="w-5 h-5" /> {t('contact.form.sent') || 'Message sent!'}</>
                      ) : (
                        <>{t('contact.form.submit')} <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                  </button>

                  {status === 'error' && errorMsg && (
                    <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <p className="text-center text-sm text-gray-500">
                    {t('contact.responseTime')}
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
