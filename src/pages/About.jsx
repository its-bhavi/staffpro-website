import { Link } from 'react-router-dom';
import { Shield, Star, Handshake, Lightbulb, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';
import { seoData } from '@/data/seoData';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We do what is right, always. Transparency and honesty are the foundation of every relationship we build with clients and candidates alike.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We deliver quality in every placement. Our rigorous screening and matching process ensures only the best talent reaches your doorstep.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We build relationships, not transactions. Your success is our success, and we invest in understanding your business deeply.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We use technology to find better talent, faster. Our digital-first approach combines AI-powered screening with human expertise.',
  },
];

const milestones = [
  { year: '2014', title: 'Founded StaffPro', description: 'Started with a 5-person team and a vision to transform staffing in India. Our first office opened in Mumbai with a focus on IT staffing.' },
  { year: '2016', title: '100th Client Milestone', description: 'Reached our 100th client partnership, expanding into healthcare and finance sectors. Team grew to 25 professionals.' },
  { year: '2018', title: 'Expanded to 4 Cities', description: 'Opened offices in Delhi, Bangalore, and Pune. Launched our contract staffing and payroll management divisions.' },
  { year: '2020', title: 'Digital Recruitment Platform', description: 'Launched our proprietary digital recruitment platform, enabling faster candidate matching and seamless client communication.' },
  { year: '2022', title: '10,000th Placement', description: 'Celebrated our 10,000th successful placement. Introduced executive search and RPO solutions for enterprise clients.' },
  { year: '2024', title: '500+ Companies Served', description: 'Now serving 500+ companies across India with a team of 100+ recruitment professionals. Recognized as a top staffing partner.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
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
              <span className="text-white/90">About Us</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              About StaffPro
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Your trusted staffing partner since 2014
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <span className="inline-block font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-bright mb-4">
                  Our Story
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  className="font-display font-bold text-text-primary mb-6"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
                >
                  Building India's Most Trusted Staffing Partner
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                  <p>
                    StaffPro was founded in 2014 with a simple yet powerful mission: to connect the right talent with the right opportunity. What started as a small team of five passionate recruiters in Mumbai has grown into one of India's most trusted staffing and recruitment companies.
                  </p>
                  <p>
                    Over the past decade, we have placed more than 15,000 professionals across 500+ companies, spanning industries from IT and healthcare to manufacturing and finance. Our success is built on a foundation of deep industry knowledge, a consultative approach, and an unwavering commitment to quality.
                  </p>
                  <p>
                    Today, StaffPro operates from four major cities across India, with a team of 100+ recruitment professionals who bring together technology-driven sourcing and human expertise to deliver staffing solutions that truly make a difference.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-pale to-white border border-border-light rounded-2xl p-10 text-center">
                  <p className="font-display font-extrabold text-primary-bright mb-2" style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}>
                    12+
                  </p>
                  <p className="font-body text-xl font-bold text-text-primary mb-2">Years of Excellence</p>
                  <p className="font-body text-text-muted">Transforming how India hires since 2014</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-sky/10 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-bright/10 rounded-full blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <div className="text-center mb-6">
            <FadeIn>
              <span className="inline-block font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-bright mb-4">
                Our Mission & Vision
              </span>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white border border-border-light rounded-2xl p-8">
                <h3 className="font-display font-bold text-text-primary text-xl mb-4">Our Mission</h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  To connect the right talent with the right opportunity — every single time. We strive to be the bridge that transforms businesses through exceptional people, while helping professionals find careers where they can truly thrive and grow.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white border border-border-light rounded-2xl p-8">
                <h3 className="font-display font-bold text-text-primary text-xl mb-4">Our Vision</h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  To be India's most trusted staffing partner — known for quality, speed, and integrity. We envision a future where every company has access to the talent they need, and every professional has a pathway to meaningful employment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Our Values"
            heading="The Principles That Guide Us"
            subtitle="Every decision we make is guided by four core values that define who we are."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="bg-white border border-border-light rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary-pale flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-primary-bright" />
                  </div>
                  <h3 className="font-body text-lg font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <SectionHeading
            label="Our Journey"
            heading="A Decade of Growth & Impact"
            subtitle="Key milestones that have shaped StaffPro into the company it is today."
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border-light md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} delay={index * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white border border-border-light rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                      <p className="font-display font-bold text-primary-bright text-lg mb-2">{milestone.year}</p>
                      <h3 className="font-body text-[16px] font-bold text-text-primary mb-2">{milestone.title}</h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary-bright rounded-full border-4 border-white shadow-sm -translate-x-1.5 mt-8 z-10" />

                  <div className="hidden md:block flex-1" />

                  <div className="md:hidden flex-1 pl-12">
                    <div className="bg-white border border-border-light rounded-2xl p-6">
                      <p className="font-display font-bold text-primary-bright text-lg mb-2">{milestone.year}</p>
                      <h3 className="font-body text-[16px] font-bold text-text-primary mb-2">{milestone.title}</h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Know More?"
        subtitle="We would love to tell you more about how StaffPro can help your business grow."
        primaryText="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
