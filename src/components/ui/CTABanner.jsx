import Button from './Button';
import FadeIn from './FadeIn';
import { companyInfo } from '@/data/companyInfo';

export default function CTABanner({
  heading = 'Ready to Build Your Dream Team?',
  subtitle = "Let's discuss how we can help you find the right talent for your business.",
  primaryText = 'Contact Us Today',
  primaryTo = '/contact',
  showPhone = true,
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0B1D3A 0%, #0F2B5B 30%, #143A7A 60%, #1A4A9A 100%)',
        }}
      />

      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-bright/10 rounded-full blur-3xl" />

      <div className="relative container-max px-6 text-center">
        <FadeIn>
          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
          >
            {heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-10">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to={primaryTo} variant="primary-white" size="lg" icon>
              {primaryText}
            </Button>
            {showPhone && (
              <Button
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                variant="outline"
                size="lg"
              >
                Call: {companyInfo.phone}
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
