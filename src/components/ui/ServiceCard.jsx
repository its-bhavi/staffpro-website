import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import FadeIn from './FadeIn';

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = LucideIcons[service.icon] || LucideIcons.Briefcase;

  return (
    <FadeIn delay={index * 0.08}>
      <div className="group relative bg-white border border-border-light rounded-2xl p-8 md:p-[32px_28px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-bright/8 overflow-hidden">
        <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-bright to-primary-sky transition-all duration-500 group-hover:w-full" />

        <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-pale flex items-center justify-center mb-5">
          <IconComponent className="w-6 h-6 text-primary-bright" />
        </div>

        <h3 className="font-body text-[19px] font-bold text-text-primary mb-3">
          {service.title}
        </h3>

        <p className="font-body text-[15px] text-text-muted leading-relaxed mb-5">
          {service.desc}
        </p>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary-bright hover:gap-3 transition-all duration-300"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </FadeIn>
  );
}
