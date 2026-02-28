import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-[10px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-bright focus:ring-offset-2';

  const variants = {
    primary:
      'bg-primary-bright text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-bright/25',
    'primary-white':
      'bg-white text-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/25',
    outline:
      'border-2 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5',
    'outline-blue':
      'border-2 border-primary-bright text-primary-bright hover:bg-primary-bright hover:text-white hover:-translate-y-0.5',
    ghost:
      'text-primary-bright hover:bg-primary-pale',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-[15px]',
    lg: 'px-9 py-4 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
