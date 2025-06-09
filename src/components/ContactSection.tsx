
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, Send, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [members, setMembers] = useState<number>(50);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const calculatePrice = (memberCount: number) => {
    const basePrice = 50;
    const pricePerMember = 5;
    return basePrice + (memberCount * pricePerMember);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 gradient-orb opacity-25 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 gradient-orb opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 fade-in">
          <div className="badge-modern mb-12 mx-auto w-fit">
            <Sparkles className="w-5 h-5 text-primary mr-3" />
            <span className="text-gray-300">Get</span>
            <span className="ml-2 text-primary font-bold">Started</span>
          </div>
          <h2 className="text-balance mb-12 text-white">
            {t('contact.title')}
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-10 rounded-3xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('footer.contact')}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white text-lg font-medium mb-3 block">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="form-input text-lg py-4"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white text-lg font-medium mb-3 block">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="form-input text-lg py-4"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white text-lg font-medium mb-3 block">
                  {t('contact.form.phone')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-input text-lg py-4"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white text-lg font-medium mb-3 block">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="form-input text-lg py-4 min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="btn-primary w-full text-lg py-4">
                {t('contact.form.submit')}
                <Send className="ml-3 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Price Calculator */}
          <div className="glass-card p-10 rounded-3xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('contact.calculator.title')}
              </h3>
            </div>
            <div className="space-y-8">
              <div>
                <Label htmlFor="members" className="text-white text-lg font-medium mb-3 block">
                  {t('contact.calculator.members')}
                </Label>
                <Input
                  id="members"
                  type="number"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="form-input text-2xl py-4 text-center"
                  min="1"
                  max="1000"
                />
              </div>
              
              <div className="glass-card p-8 text-center rounded-3xl">
                <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                  Estimated Monthly Cost
                </div>
                <div className="text-6xl font-black text-gradient mb-6">
                  €{calculatePrice(members)}
                </div>
                <div className="text-lg text-gray-400">
                  per month
                </div>
              </div>

              <Button className="btn-primary w-full text-lg py-4">
                {t('contact.calculator.contactSales')}
              </Button>

              <div className="text-center space-y-3">
                <div className="text-lg text-gray-300">✓ 30-day free trial</div>
                <div className="text-lg text-gray-300">✓ No setup fees</div>
                <div className="text-lg text-gray-300">✓ Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-16 w-4 h-4 rounded-full opacity-60 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)'}}></div>
      <div className="absolute bottom-1/3 right-20 w-5 h-5 rounded-full opacity-70 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #15803d, #22c55e)', animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default ContactSection;
