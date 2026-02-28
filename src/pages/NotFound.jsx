import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import { seoData } from '@/data/seoData';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title={seoData.notFound.title}
        description={seoData.notFound.description}
      />

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <FadeIn>
            <p
              className="font-display font-extrabold text-primary-bright/10 leading-none select-none"
              style={{ fontSize: 'clamp(120px, 20vw, 240px)' }}
            >
              404
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-text-primary text-3xl md:text-4xl mb-4 -mt-6">
              Page Not Found
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-text-muted text-lg max-w-md mx-auto mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary-bright text-white font-body font-semibold text-[15px] px-7 py-3.5 rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-bright/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back Home
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
