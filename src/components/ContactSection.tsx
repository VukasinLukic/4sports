
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const { t } = useLanguage();
  const [members, setMembers] = useState<number>(50);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Simple pricing calculation (5 EUR per member per month)
  const calculatePrice = (memberCount: number) => {
    const basePrice = 50; // Base price
    const pricePerMember = 5;
    return basePrice + (memberCount * pricePerMember);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
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
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {t('footer.contact')}
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Price Calculator */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {t('contact.calculator.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="members" className="text-foreground text-lg">
                  {t('contact.calculator.members')}
                </Label>
                <Input
                  id="members"
                  type="number"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="mt-2 text-lg"
                  min="1"
                  max="1000"
                />
              </div>
              
              <div className="p-6 bg-primary/10 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('contact.calculator.estimate')}
                  </p>
                  <div className="text-4xl font-bold text-primary">
                    {calculatePrice(members)} {t('contact.calculator.currency')}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">per month</p>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                {t('contact.calculator.contactSales')}
              </Button>

              <div className="text-sm text-muted-foreground text-center">
                <p>30-day free trial included</p>
                <p>No setup fees • Cancel anytime</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
