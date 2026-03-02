import FadeIn from './FadeIn';
import Button from './Button';
import SectionHeading from './SectionHeading';

const metrics = [
  {
    value: '98%',
    title: 'Client Retention',
    description: 'Our clients stay because we consistently deliver quality results and build lasting partnerships.',
  },
  {
    value: '48hr',
    title: 'Avg. Response Time',
    description: 'From requirement to shortlist — we move fast without compromising on candidate quality.',
  },
  {
    value: '3x',
    title: 'Faster Hiring',
    description: 'Our streamlined process and talent pool means you fill positions three times faster than industry average.',
  },
  {
    value: '92%',
    title: 'First-Year Retention',
    description: 'Candidates placed by NextHorizon Staffing have significantly higher first-year retention rates.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="Why Choose Us"
              heading="Built on Trust. Driven by Results."
              centered={false}
            />
            <FadeIn delay={0.2}>
              <p className="font-body text-text-secondary leading-relaxed mb-8 -mt-8">
                We do not just fill positions — we build partnerships. Our consultative
                approach means we take the time to understand your business, culture,
                and long-term goals before recommending candidates. This results-driven
                methodology is why 98% of our clients return to us year after year.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button to="/employers" variant="primary" icon>
                Partner With Us
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.title} delay={index * 0.1}>
                <div className="bg-white border border-border-light rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                  <p className="font-display font-bold text-primary-bright text-3xl mb-2">
                    {metric.value}
                  </p>
                  <p className="font-body text-[15px] font-bold text-text-primary mb-2">
                    {metric.title}
                  </p>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
