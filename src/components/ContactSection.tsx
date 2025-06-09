
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, Send } from 'lucide-react';

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
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-muted-foreground">Get</span>
            <span className="ml-2 text-sm font-medium text-primary">Started</span>
          </div>
          <h2 className="text-balance mb-6 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Send className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">
                {t('footer.contact')}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  {t('contact.form.phone')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-2 min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="btn-primary w-full">
                {t('contact.form.submit')}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Price Calculator */}
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">
                {t('contact.calculator.title')}
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="members" className="text-foreground">
                  {t('contact.calculator.members')}
                </Label>
                <Input
                  id="members"
                  type="number"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="mt-2 text-xl"
                  min="1"
                  max="1000"
                />
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Estimated Monthly Cost
                </div>
                <div className="text-4xl font-bold text-primary mb-4">
                  €{calculatePrice(members)}
                </div>
                <div className="text-sm text-muted-foreground">
                  per month
                </div>
              </div>

              <Button className="btn-primary w-full">
                {t('contact.calculator.contactSales')}
              </Button>

              <div className="text-center space-y-1">
                <div className="text-sm text-muted-foreground">✓ 30-day free trial</div>
                <div className="text-sm text-muted-foreground">✓ No setup fees</div>
                <div className="text-sm text-muted-foreground">✓ Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
