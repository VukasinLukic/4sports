
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 font-mono">
          <div className="text-primary text-sm mb-4">
            $ ./contact.sh --init
          </div>
          <h2 className="text-2xl md:text-4xl font-mono text-primary mb-6">
            {t('contact.title')}
          </h2>
          <div className="h-px bg-primary w-40 mx-auto mb-6"></div>
          <p className="text-primary text-sm">
            &gt; {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="ascii-border bg-black p-8">
            <div className="font-mono mb-6">
              <div className="text-primary text-sm mb-4">
                $ nano contact_form.txt
              </div>
              <h3 className="text-lg text-primary">
                {t('footer.contact')}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div>
                <Label htmlFor="name" className="text-primary text-sm">
                  &gt; {t('contact.form.name')}:
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-2 bg-black border-primary text-primary font-mono"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-primary text-sm">
                  &gt; {t('contact.form.email')}:
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 bg-black border-primary text-primary font-mono"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-primary text-sm">
                  &gt; {t('contact.form.phone')}:
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2 bg-black border-primary text-primary font-mono"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-primary text-sm">
                  &gt; {t('contact.form.message')}:
                </Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-2 w-full min-h-[120px] bg-black border border-primary text-primary font-mono p-3 rounded-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-black border-primary text-primary hover:bg-primary hover:text-black font-mono">
                $ {t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Price Calculator */}
          <div className="ascii-border bg-black p-8">
            <div className="font-mono mb-6">
              <div className="text-primary text-sm mb-4">
                $ python3 calculator.py
              </div>
              <h3 className="text-lg text-primary">
                {t('contact.calculator.title')}
              </h3>
            </div>
            <div className="space-y-6 font-mono">
              <div>
                <Label htmlFor="members" className="text-primary text-sm">
                  &gt; {t('contact.calculator.members')}:
                </Label>
                <Input
                  id="members"
                  type="number"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="mt-2 bg-black border-primary text-primary font-mono text-lg"
                  min="1"
                  max="1000"
                />
              </div>
              
              <div className="ascii-border p-6 bg-black">
                <div className="text-center">
                  <div className="text-primary text-xs mb-2">
                    OUTPUT:
                  </div>
                  <pre className="text-primary text-sm mb-4">
{`┌─ PRICE CALCULATION ─┐
│                     │
│    ${calculatePrice(members)} EUR/MONTH   │
│                     │
└─────────────────────┘`}
                  </pre>
                  <div className="text-primary text-xs">
                    ESTIMATED_COST
                  </div>
                </div>
              </div>

              <Button className="w-full bg-black border-primary text-primary hover:bg-primary hover:text-black font-mono text-lg py-6">
                $ {t('contact.calculator.contactSales')}
              </Button>

              <div className="text-xs text-primary text-center font-mono">
                <div>&gt; 30-day free trial included</div>
                <div>&gt; No setup fees • Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
