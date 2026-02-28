import FadeIn from './FadeIn';

export default function TestimonialCard({ testimonial, index = 0 }) {
  const firstLetter = testimonial.name.charAt(0);

  return (
    <FadeIn delay={index * 0.1}>
      <div className="bg-white border border-border-light rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary-bright/5 h-full flex flex-col">
        <span className="font-display text-[80px] leading-none text-primary-pale select-none mb-2">
          &ldquo;
        </span>

        <p className="font-body text-[15.5px] text-text-secondary leading-relaxed mb-8 flex-1 -mt-6">
          {testimonial.quote}
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-body font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: testimonial.color }}
          >
            {firstLetter}
          </div>
          <div>
            <p className="font-body text-[15px] font-bold text-text-primary">
              {testimonial.name}
            </p>
            <p className="font-body text-sm text-text-muted">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
