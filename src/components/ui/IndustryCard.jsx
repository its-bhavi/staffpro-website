import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function IndustryCard({ industry, index = 0 }) {
  const IconComponent = LucideIcons[industry.icon] || LucideIcons.Building2;

  return (
    <FadeIn delay={index * 0.08}>
      <Link to="/industries">
        <div className="group flex items-center gap-4 bg-white border border-border-light rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-bright/30 hover:shadow-lg hover:shadow-primary-bright/8 cursor-pointer">
          <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-pale flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-primary-bright/10">
            <IconComponent className="w-6 h-6 text-primary-bright" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-body text-[16px] font-bold text-text-primary mb-0.5">
              {industry.name}
            </h3>
            <p className="font-body text-sm text-text-muted">{industry.roles}</p>
          </div>

          <ArrowRight className="w-5 h-5 text-text-light group-hover:text-primary-bright transition-colors duration-300 flex-shrink-0" />
        </div>
      </Link>
    </FadeIn>
  );
}
