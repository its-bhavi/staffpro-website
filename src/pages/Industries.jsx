import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import { industries } from '@/data/industries';
import { seoData } from '@/data/seoData';

function IndustryDetail({ industry, index }) {
  const IconComponent = LucideIcons[industry.icon] || LucideIcons.Building2;

  return (
    <div className={index % 2 === 0 ? 'bg-white' : 'bg-surface-alt'}>
      <div className="section-padding">
        <div className="container-max">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? '' : ''}`}>
            <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
              <FadeIn>
                <div className="w-16 h-16 rounded-2xl bg-primary-pale flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary-bright" />
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-display font-bold text-text-primary" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                    {industry.name}
                  </h2>
                  <span className="font-body text-sm font-semibold text-primary-bright bg-primary-pale px-3 py-1 rounded-full whitespace-nowrap">
                    {industry.roles}
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="font-body text-text-secondary leading-relaxed mb-8">
                  {industry.desc}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button to="/contact" variant="primary" icon>
                  Explore Opportunities
                </Button>
              </FadeIn>
            </div>

            <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
              <FadeIn delay={0.2} direction={index % 2 !== 0 ? 'right' : 'left'}>
                <div className="bg-white border border-border-light rounded-2xl p-8">
                  <h3 className="font-body text-[16px] font-bold text-text-primary mb-5">Key Roles We Fill</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.keyRoles.map((role) => (
                      <div key={role} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-primary-bright flex-shrink-0" />
                        <span className="font-body text-[15px] text-text-secondary">{role}</span>
                      </div>
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

export default function Industries() {
  return (
    <>
      <SEOHead
        title={seoData.industries.title}
        description={seoData.industries.description}
        keywords={seoData.industries.keywords}
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
              <span className="text-white/90">Industries</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Industries We Serve
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Specialized staffing expertise across America's key economic sectors
            </p>
          </FadeIn>
        </div>
      </section>

      {industries.map((industry, index) => (
        <IndustryDetail key={industry.name} industry={industry} index={index} />
      ))}

      <CTABanner
        heading="Don't See Your Industry?"
        subtitle="We serve many more sectors. Get in touch and we'll create a tailored staffing solution for your industry."
        primaryText="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
