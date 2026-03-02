import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import ContactForm from '@/components/ui/ContactForm';
import { companyInfo } from '@/data/companyInfo';
import { seoData } from '@/data/seoData';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: companyInfo.address,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: companyInfo.hours,
  },
];

const socialLinks = [
  { icon: Linkedin, href: companyInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: companyInfo.socials.twitter, label: 'Twitter' },
  { icon: Instagram, href: companyInfo.socials.instagram, label: 'Instagram' },
];

export default function Contact() {
  return (
    <>
      <SEOHead
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
      />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0B1D3A 0%, #0F2B5B 30%, #143A7A 60%, #1A4A9A 100%)',
          }}
        />
        <div className="relative container-max px-6 text-center">
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 font-body text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90">Contact</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Get In Touch
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Let's discuss how we can help you find the right talent
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="font-display font-bold text-text-primary text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-text-muted mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </FadeIn>
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="bg-white border border-border-light rounded-2xl p-8">
                  <h3 className="font-display font-bold text-text-primary text-xl mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6 mb-8">
                    {contactDetails.map((detail) => (
                      <div key={detail.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary-pale flex items-center justify-center flex-shrink-0">
                          <detail.icon className="w-5 h-5 text-primary-bright" />
                        </div>
                        <div>
                          <p className="font-body text-sm font-semibold text-text-primary mb-0.5">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="font-body text-[15px] text-text-muted hover:text-primary-bright transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="font-body text-[15px] text-text-muted">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border-light pt-6">
                    <p className="font-body text-sm font-semibold text-text-primary mb-4">
                      Follow Us
                    </p>
                    <div className="flex items-center gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-xl border border-border-light flex items-center justify-center text-text-muted hover:text-primary-bright hover:border-primary-bright/30 transition-all duration-300"
                        >
                          <social.icon className="w-[18px] h-[18px]" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 px-6">
        <div className="container-max">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden border border-border-light">
              <iframe
                title="NextHorizon Staffing Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.5!2d-106.6196!3d35.0977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220ba8e3b6e3e3%3A0x0!2s1209+Mountain+Rd+Pl+NE+STE+R%2C+Albuquerque%2C+NM+87110!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
