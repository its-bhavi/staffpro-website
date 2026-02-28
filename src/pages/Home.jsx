import SEOHead from '@/components/seo/SEOHead';
import HeroSection from '@/components/ui/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import IndustryCard from '@/components/ui/IndustryCard';
import StatsCounter from '@/components/ui/StatsCounter';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABanner from '@/components/ui/CTABanner';
import ClientLogos from '@/components/ui/ClientLogos';
import FadeIn from '@/components/ui/FadeIn';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { testimonials } from '@/data/testimonials';
import { stats } from '@/data/stats';
import { seoData } from '@/data/seoData';

export default function Home() {
  return (
    <>
      <SEOHead
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
      />

      <HeroSection />

      <ClientLogos />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="What We Offer"
            heading="Staffing Solutions That Deliver Results"
            subtitle="End-to-end workforce solutions tailored to your industry, scale, and timeline. We handle the talent — you focus on growth."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Industries We Serve"
            heading="Deep Expertise Across Key Sectors"
            subtitle="Specialized staffing solutions for the industries that power India's economy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.name} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter stats={stats} />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Testimonials"
            heading="What Our Clients Say"
            subtitle="Hear from the companies and leaders who trust StaffPro with their most important asset — their people."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
