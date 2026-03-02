import FadeIn from './FadeIn';

const logos = [
  'TechVista',
  'NovaCare',
  'Meridian',
  'InfraCore',
  'BlueWave',
  'Zenith',
];

export default function ClientLogos() {
  return (
    <section className="py-12 md:py-16 border-y border-border-light bg-white">
      <div className="container-max px-6">
        <FadeIn>
          <p className="font-body text-sm text-text-light text-center mb-8 uppercase tracking-wider font-medium">
            Trusted by leading companies across the US
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((name) => (
              <div
                key={name}
                className="font-body text-xl md:text-2xl font-bold text-text-light/40 hover:text-text-muted transition-colors duration-300 select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
