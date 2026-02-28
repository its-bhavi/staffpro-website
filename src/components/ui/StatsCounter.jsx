import { useIntersection } from '@/hooks/useIntersection';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import FadeIn from './FadeIn';

function StatItem({ stat, index }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  const count = useAnimatedCounter(stat.value, isVisible, 2000);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString('en-IN');
    }
    return num;
  };

  return (
    <FadeIn delay={index * 0.1}>
      <div ref={ref} className="text-center">
        <p
          className="font-display font-extrabold text-white mb-2"
          style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
        >
          {formatNumber(count)}
          {stat.suffix}
        </p>
        <p className="font-body text-lg font-semibold text-white/90 mb-1">
          {stat.label}
        </p>
        <p className="font-body text-sm text-white/60">{stat.description}</p>
      </div>
    </FadeIn>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0B1D3A 0%, #0F2B5B 30%, #143A7A 60%, #1A4A9A 100%)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="relative container-max px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
