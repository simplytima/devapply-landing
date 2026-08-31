import { motion } from 'framer-motion';
import { BarChart3, Briefcase, Clock, CheckCircle2, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Real-time Analytics',
    description: 'Track your success rate, interview conversion, and application velocity.',
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Full CRUD',
    description: 'Add, edit, delete, and filter your job applications with ease.',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Interview Tracking',
    description: 'Never miss an interview with scheduled reminders and status updates.',
    color: 'from-emerald-600 to-green-600',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Success Metrics',
    description: 'See your acceptance rate, rejection rate, and total applications at a glance.',
    color: 'from-rose-600 to-red-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Authentication',
    description: 'JWT authentication with password reset and email verification.',
    color: 'from-amber-600 to-orange-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast & Responsive',
    description: 'Optimized for all devices with a modern dark theme.',
    color: 'from-pink-600 to-rose-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            Track Success
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Powerful features to help you stay organized and land your dream job faster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300 group"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;