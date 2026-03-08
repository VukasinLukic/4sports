'use client';

import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Send, Loader2, CheckCircle, AlertCircle, Trash2, HelpCircle } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

type RequestType = 'account_deletion' | 'general';

const SupportContent = () => {
  const { t } = useLanguage();
  const [requestType, setRequestType] = useState<RequestType>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const cooldownRef = useRef(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (cooldownRef.current) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg(t('support.form.allFieldsRequired') || 'All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMsg(t('support.form.invalidEmail') || 'Please enter a valid email.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const subject = requestType === 'account_deletion'
      ? `Account Deletion Request - ${formData.email}`
      : `Support Request - ${formData.name}`;

    const body = {
      name: formData.name.trim().slice(0, 100),
      email: formData.email.trim(),
      subject: subject.slice(0, 200),
      message: formData.message.trim().slice(0, 5000),
    };

    const url = `${API_URL}/api/v1/contact`;
    console.log('[SupportForm] Submitting to:', url);
    console.log('[SupportForm] Request type:', requestType);
    console.log('[SupportForm] Request body:', body);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log('[SupportForm] Response status:', res.status);
      const data = await res.json();
      console.log('[SupportForm] Response data:', data);

      if (res.ok && data.success) {
        console.log('[SupportForm] Success!');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
          setStatus('idle');
        }, 30000);
      } else {
        console.error('[SupportForm] Server error:', data);
        setStatus('error');
        setErrorMsg(data?.error?.message || t('support.form.serverError') || 'Something went wrong.');
      }
    } catch (err) {
      console.error('[SupportForm] Network error:', err);
      console.error('[SupportForm] API_URL was:', API_URL);
      setStatus('error');
      setErrorMsg(t('support.form.serverError') || 'Failed to send. Please try again later.');
    }
  }, [formData, requestType, t]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          {t('support.backToHome') || 'Back to Home'}
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('support.title') || 'Support'}
          </h1>
          <p className="text-gray-400 mb-12">
            {t('support.description') || 'How can we help you? Choose a request type and describe your issue.'}
          </p>

          {/* Request Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button
              type="button"
              onClick={() => setRequestType('general')}
              className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                requestType === 'general'
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <HelpCircle className={`w-6 h-6 mb-3 ${requestType === 'general' ? 'text-primary' : 'text-gray-500'}`} />
              <h3 className="text-white font-semibold text-sm">
                {t('support.generalSupport') || 'General Support'}
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                {t('support.generalDesc') || 'Questions, feedback, or issues'}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setRequestType('account_deletion')}
              className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                requestType === 'account_deletion'
                  ? 'border-red-500/50 bg-red-500/10'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <Trash2 className={`w-6 h-6 mb-3 ${requestType === 'account_deletion' ? 'text-red-400' : 'text-gray-500'}`} />
              <h3 className="text-white font-semibold text-sm">
                {t('support.deleteAccount') || 'Delete Account'}
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                {t('support.deleteDesc') || 'Request account and data deletion'}
              </p>
            </button>
          </div>

          {/* Account Deletion Warning */}
          {requestType === 'account_deletion' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 mb-8"
            >
              <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {t('support.deleteWarningTitle') || 'Important Information'}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('support.deleteWarningText') || 'Requesting account deletion will permanently remove all your data including profile information, activity history, and any associated content. This action cannot be undone. Please make sure to include the email address associated with your account.'}
              </p>
            </motion.div>
          )}

          {/* Form */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="support-name" className="block text-white font-medium mb-3">
                  {t('support.form.name') || 'Full Name'}
                </label>
                <input
                  id="support-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                  placeholder={t('support.form.namePlaceholder') || 'Your full name'}
                  required
                />
              </div>

              <div>
                <label htmlFor="support-email" className="block text-white font-medium mb-3">
                  {t('support.form.email') || 'Email Address'}
                </label>
                <input
                  id="support-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                  placeholder={requestType === 'account_deletion'
                    ? (t('support.form.emailPlaceholderDelete') || 'Email associated with your account')
                    : (t('support.form.emailPlaceholder') || 'your@email.com')
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="support-message" className="block text-white font-medium mb-3">
                  {requestType === 'account_deletion'
                    ? (t('support.form.reason') || 'Reason for Deletion (Optional)')
                    : (t('support.form.message') || 'Message')
                  }
                </label>
                <textarea
                  id="support-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200 resize-none"
                  placeholder={requestType === 'account_deletion'
                    ? (t('support.form.reasonPlaceholder') || 'Please tell us why you want to delete your account...')
                    : (t('support.form.messagePlaceholder') || 'Describe your issue or question...')
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`relative w-full px-6 py-3.5 border-2 font-bold rounded-lg transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed ${
                  requestType === 'account_deletion'
                    ? 'border-red-500/30 text-white hover:border-red-500/60'
                    : 'border-white/20 text-white hover:border-white/40'
                }`}
              >
                <span className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out ${
                  requestType === 'account_deletion' ? 'bg-red-500' : 'bg-white'
                }`}></span>
                <span className={`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 ${
                  requestType === 'account_deletion' ? 'group-hover:text-white' : 'group-hover:text-black'
                }`}>
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> {t('support.form.sending') || 'Sending...'}</>
                  ) : status === 'success' ? (
                    <><CheckCircle className="w-5 h-5" /> {t('support.form.sent') || 'Request sent!'}</>
                  ) : requestType === 'account_deletion' ? (
                    <><Trash2 className="w-5 h-5" /> {t('support.form.submitDelete') || 'Submit Deletion Request'}</>
                  ) : (
                    <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> {t('support.form.submit') || 'Send Message'}</>
                  )}
                </span>
              </button>

              {status === 'error' && errorMsg && (
                <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportContent;
