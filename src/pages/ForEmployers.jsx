import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ClipboardList,
  Search,
  Filter,
  CalendarCheck,
  UserPlus,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Users,
} from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import StatsCounter from '@/components/ui/StatsCounter';
import CTABanner from '@/components/ui/CTABanner';
import { stats } from '@/data/stats';
import { seoData } from '@/data/seoData';

const benefits = [
  {
    icon: Clock,
    title: 'Faster Time-to-Hire',
    description: 'Our pre-screened talent pool and streamlined processes mean you get qualified candidates in 24-48 hours, not weeks.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every candidate undergoes rigorous screening, skill assessment, and background verification. We offer a 90-day replacement guarantee.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    description: 'Reduce your recruitment overhead by up to 40%. No upfront costs, no wasted time on unqualified candidates.',
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Dedicated recruiters with deep knowledge in your industry. We speak your language and understand your talent needs.',
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Understanding Your Needs',
    description: 'We start with a detailed consultation to understand your business goals, team dynamics, required skills, cultural fit, and hiring timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Sourcing & Screening',
    description: 'Our recruiters tap into our extensive talent database, job boards, and professional networks to identify the best candidates for your role.',
  },
  {
    icon: Filter,
    step: '03',
    title: 'Shortlisting Candidates',
    description: 'We present a curated shortlist of 3-5 top candidates with detailed profiles, skill assessments, and our professional recommendation.',
  },
  {
    icon: CalendarCheck,
    step: '04',
    title: 'Interview Coordination',
    description: 'We handle all scheduling, provide interview preparation for candidates, and collect feedback to keep the process moving efficiently.',
  },
  {
    icon: UserPlus,
    step: '05',
    title: 'Onboarding Support',
    description: 'From offer negotiation to first-day logistics, we ensure a smooth transition for both you and your new team member.',
  },
];

export default function ForEmployers() {
  return (
    <>
      <SEOHead
        title={seoData.employers.title}
        description={seoData.employers.description}
        keywords={seoData.employers.keywords}
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
              <span className="text-white/90">For Employers</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              For Employers
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Partner with us to find the right talent that drives your business forward
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            label="Why Partner With Us"
            heading="The Hiring Advantage You Deserve"
            subtitle="We combine industry expertise with technology to deliver staffing solutions that save you time, money, and effort."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="bg-white border border-border-light rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-pale flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-primary-bright" />
                  </div>
                  <h3 className="font-body text-lg font-bold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-[15px] text-text-muted leading-relaxed">
                    {benefit.description}
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
            label="Our Process"
            heading="How We Find Your Perfect Hire"
            subtitle="A proven 5-step process that delivers results consistently."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="flex gap-6 bg-white border border-border-light rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary-pale flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-bright" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs font-bold text-primary-bright bg-primary-pale px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <h3 className="font-body text-lg font-bold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-[15px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter stats={stats} />

      <CTABanner
        heading="Ready to Hire Smarter?"
        subtitle="Book a free consultation with our team and discover how we can transform your hiring process."
        primaryText="Request a Consultation"
        primaryTo="/contact"
      />
    </>
  );
}
