import { Link } from 'react-router-dom';
import {
  ChevronRight,
  FileText,
  Target,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Monitor,
  Heart,
  DollarSign,
  Factory,
  ShoppingBag,
  Wrench,
} from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import { seoData } from '@/data/seoData';
import { companyInfo } from '@/data/companyInfo';

const howWeHelp = [
  {
    icon: Target,
    title: 'Personalized Job Matching',
    description: 'We do not just forward resumes. We take the time to understand your skills, career goals, and preferences to match you with roles where you will truly thrive.',
  },
  {
    icon: Briefcase,
    title: 'Access to Top Employers',
    description: 'We partner with 500+ companies across the United States, giving you access to exclusive opportunities that are not posted on public job boards.',
  },
  {
    icon: GraduationCap,
    title: 'Career Guidance',
    description: 'Our experienced consultants provide interview preparation, resume tips, and career advice to help you put your best foot forward.',
  },
  {
    icon: FileText,
    title: 'End-to-End Support',
    description: 'From application to onboarding, we guide you through every step of the process and ensure a smooth transition into your new role.',
  },
];

const careerTips = [
  'Keep your resume updated and tailored to each role you apply for',
  'Research the company thoroughly before every interview',
  'Practice common interview questions and prepare specific examples',
  'Highlight measurable achievements, not just responsibilities',
  'Build a strong LinkedIn profile with relevant keywords',
  'Follow up after interviews with a thoughtful thank-you note',
];

const openingsSectors = [
  { icon: Monitor, name: 'IT & Technology', count: '120+' },
  { icon: Heart, name: 'Healthcare', count: '85+' },
  { icon: DollarSign, name: 'Finance', count: '60+' },
  { icon: Factory, name: 'Manufacturing', count: '90+' },
  { icon: ShoppingBag, name: 'Retail & FMCG', count: '70+' },
  { icon: Wrench, name: 'Engineering', count: '55+' },
];

export default function ForJobSeekers() {
  return (
    <>
      <SEOHead
        title={seoData.jobSeekers.title}
        description={seoData.jobSeekers.description}
        keywords={seoData.jobSeekers.keywords}
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
              <span className="text-white/90">For Job Seekers</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              For Job Seekers
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Your next career opportunity is closer than you think
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="How We Help"
            heading="Your Career, Our Priority"
            subtitle="We are not just a staffing agency — we are your career partner, committed to helping you find roles that match your ambitions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {howWeHelp.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white border border-border-light rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary-bright" />
                  </div>
                  <h3 className="font-body text-lg font-bold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <span className="inline-block font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-bright mb-4">
                  Career Resources
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  className="font-display font-bold text-text-primary mb-6"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
                >
                  Tips to Land Your Dream Job
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="font-body text-text-secondary leading-relaxed mb-8">
                  Our recruitment experts share proven strategies to help you stand out in today's competitive job market.
                </p>
              </FadeIn>
              <ul className="space-y-4">
                {careerTips.map((tip, index) => (
                  <FadeIn key={index} delay={0.2 + index * 0.05}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[15px] text-text-secondary">{tip}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <FadeIn delay={0.3} direction="left">
              <div className="bg-white border border-border-light rounded-2xl p-8 md:p-10">
                <h3 className="font-display font-bold text-text-primary text-xl mb-4">
                  Current Openings by Sector
                </h3>
                <p className="font-body text-text-muted text-sm mb-6">
                  We have active positions across all major industries
                </p>
                <div className="space-y-3">
                  {openingsSectors.map((sector) => (
                    <div
                      key={sector.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-surface-alt hover:bg-primary-pale transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <sector.icon className="w-5 h-5 text-primary-bright" />
                        <span className="font-body text-[15px] font-medium text-text-primary">
                          {sector.name}
                        </span>
                      </div>
                      <span className="font-body text-sm font-semibold text-primary-bright">
                        {sector.count} roles
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-primary-pale flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary-bright" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold text-text-primary mb-4"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                Submit Your CV
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="font-body text-text-secondary leading-relaxed mb-8">
                Take the first step towards your next career move. Send us your CV and our team will match you with relevant opportunities. You can email your resume directly or reach out to us through our contact form.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href={`mailto:${companyInfo.email}?subject=CV Submission&body=Please find my CV attached.`}
                  variant="primary"
                  size="lg"
                  icon
                >
                  Email Your CV
                </Button>
                <Button to="/contact" variant="outline-blue" size="lg">
                  Contact Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready for Your Next Career Move?"
        subtitle="Join thousands of professionals who found their dream jobs through NextHorizon Staffing."
        primaryText="Submit Your CV"
        primaryTo="/contact"
        showPhone={false}
      />
    </>
  );
}
