import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const APP_URL = 'https://devapply-alpha.vercel.app';

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-violet-400 text-xs font-medium">🚀 Now Available</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Track Your Job Applications{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            Like a Pro
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-6">
          Stop losing track of your job applications. Get real-time analytics,
          interview tracking, and success rates – all in one beautiful dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started Free
            <ArrowRight size={18} />
          </a>
          <a
            href={`${APP_URL}/login`}
            className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Play size={18} />
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;