import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="hero-bg">
      <div className="mx-auto max-w-6xl px-4 py-28 relative">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
        >
          İLKER KABACIK
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-lg md:text-2xl text-ice/90"
        >
          Building Tomorrow’s Payment Systems. <span className="italic font-serif">Aligned with Celestial Design.</span>
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/projects" className="px-5 py-3 rounded-xl bg-secondary text-white text-sm shadow-soft hover:opacity-90">Explore Projects</a>
          <a href="/astro" className="px-5 py-3 rounded-xl border border-white/20 text-sm hover:border-secondary/60">Astro Leadership Map</a>
        </div>
      </div>
    </section>
  );
}