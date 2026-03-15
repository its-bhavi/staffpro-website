import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/footerLinks';
import { companyInfo } from '@/data/companyInfo';

const socialIcons = [
  { icon: Linkedin, href: companyInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: companyInfo.socials.twitter, label: 'Twitter' },
  { icon: Instagram, href: companyInfo.socials.instagram, label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-[#A0AEC0]" role="contentinfo">
      <div className="max-w-container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-primary to-primary-light flex items-center justify-center font-display font-extrabold text-lg text-white">
                N
              </div>
              <span className="font-body text-lg font-bold text-white">
                NextHorizon Staffing
              </span>
            </Link>
            <p className="font-body text-sm leading-relaxed mb-5 text-[#A0AEC0]">
              {companyInfo.description}
            </p>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 font-body text-sm text-[#CBD5E1] hover:text-primary-sky transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-[#A0AEC0] flex-shrink-0" />
                <span className="break-all">{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 font-body text-sm text-[#CBD5E1] hover:text-primary-sky transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-[#A0AEC0] flex-shrink-0" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A0AEC0] flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-[#CBD5E1]">
                  {companyInfo.addressLines.map((line, i) => (
                    <span key={i}>{line}{i < companyInfo.addressLines.length - 1 && <br />}</span>
                  ))}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-[38px] h-[38px] rounded-[10px] border border-white/10 flex items-center justify-center text-[#A0AEC0] hover:text-primary-sky hover:border-primary-sky/30 transition-all duration-300"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h3 className="font-body text-[13px] font-bold uppercase tracking-wider text-white mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-[#CBD5E1] hover:text-primary-sky transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#64748B]">
            &copy; Copyright NextHorizon Staffing LLC {currentYear}. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#64748B] hover:text-[#A0AEC0] transition-colors duration-200 cursor-pointer">
            Do Not Sell My Personal Information
          </p>
        </div>
      </div>
    </footer>
  );
}
