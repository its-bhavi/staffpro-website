import FadeIn from './FadeIn';

export default function SectionHeading({
  label,
  heading,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <FadeIn>
          <span
            className={`inline-block font-body text-[13px] font-semibold uppercase tracking-[0.08em] mb-4 ${
              light ? 'text-primary-sky' : 'text-primary-bright'
            }`}
          >
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`font-display font-bold leading-tight mb-4 ${
            light ? 'text-white' : 'text-text-primary'
          }`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
        >
          {heading}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={`font-body text-[16px] leading-relaxed max-w-2xl ${
              centered ? 'mx-auto' : ''
            } ${light ? 'text-white/70' : 'text-text-muted'}`}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
