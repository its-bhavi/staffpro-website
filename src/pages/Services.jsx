import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import { services } from '@/data/services';
import { seoData } from '@/data/seoData';

function ServiceDetail({ service, index }) {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Briefcase;
  const isReversed = index % 2 !== 0;

  return (
    <div id={service.slug} className={`${index % 2 === 0 ? 'bg-white' : 'bg-surface-alt'}`}>
      <div className="section-padding">
        <div className="container-max">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
            <div className={isReversed ? 'lg:order-2' : ''}>
              <FadeIn>
                <div className="w-16 h-16 rounded-2xl bg-primary-pale flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary-bright" />
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display font-bold text-text-primary mb-4" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                  {service.title}
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="font-body text-text-secondary leading-relaxed mb-8">
                  {service.detail}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button to="/contact" variant="primary" icon>
                  Discuss This Service
                </Button>
              </FadeIn>
            </div>

            <div className={isReversed ? 'lg:order-1' : ''}>
              <FadeIn delay={0.2} direction={isReversed ? 'right' : 'left'}>
                <div className="bg-white border border-border-light rounded-2xl p-8">
                  <h3 className="font-body text-[16px] font-bold text-text-primary mb-5">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="font-body text-[15px] text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-body text-[16px] font-bold text-text-primary mb-4">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.map((item) => (
                      <span
                        key={item}
                        className="font-body text-[13px] font-medium bg-primary-pale text-primary-bright px-3 py-1.5 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <SEOHead
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
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
              <span className="text-white/90">Our Services</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Comprehensive staffing solutions for every business need
            </p>
          </FadeIn>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceDetail key={service.slug} service={service} index={index} />
      ))}

      <CTABanner
        heading="Need a Custom Solution?"
        subtitle="Every business is unique. Let us design a staffing strategy tailored to your specific needs."
        primaryText="Let's Talk"
        primaryTo="/contact"
      />
    </>
  );
}
