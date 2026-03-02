import { motion } from 'framer-motion';
import Button from './Button';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0B1D3A 0%, #0F2B5B 25%, #143A7A 55%, #1A4A9A 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="absolute top-[15%] left-[10%] w-64 h-64 bg-primary-sky/15 rounded-full blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-primary-bright/10 rounded-full blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-[50%] right-[30%] w-48 h-48 bg-primary-light/10 rounded-full blur-3xl"
        animate={{ y: [10, -30, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <motion.div
        className="relative z-10 container-max px-6 text-center pt-24 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 mb-8"
        >
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="font-body text-sm text-white/90 font-medium">
            Trusted by 500+ Companies Across the US
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          We Find the Right{' '}
          <span className="text-gradient">People</span> for Your Business
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Trusted staffing services built for long-term success. From temporary
          workforce to executive search, we deliver talent that drives your
          business forward.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button to="/contact" variant="primary-white" size="lg" icon>
            Request Staff
          </Button>
          <Button to="/job-seekers" variant="outline" size="lg">
            Find a Job
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/50 font-body text-sm mb-10"
        >
          <span className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">12+</span> Years
          </span>
          <span className="w-px h-5 bg-white/20 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">500+</span> Companies
          </span>
          <span className="w-px h-5 bg-white/20 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">15K+</span> Placements
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {['#3B82F6', '#10B981', '#F59E0B', '#EF4444'].map((color) => (
              <div
                key={color}
                className="w-9 h-9 rounded-full border-2 border-white/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="font-body text-sm text-white/60">
            Serving 6+ Industries
          </span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-bg to-transparent" />
    </section>
  );
}
