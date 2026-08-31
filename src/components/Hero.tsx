import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-violet-400 text-xs font-medium">🚀 Now Available</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Track Your Job Applications{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            Like a Pro
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-6"
        >
          Stop losing track of your job applications. Get real-time analytics,
          interview tracking, and success rates – all in one beautiful dashboard.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started Free
            <ArrowRight size={18} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Play size={18} />
            Watch Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mt-12"
        >
          {[
            { value: '10K+', label: 'Applications Tracked' },
            { value: '94%', label: 'Success Rate' },
            { value: '4.9⭐', label: 'User Rating' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl md:text-3xl font-bold text-violet-400">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;