import { motion } from 'framer-motion';
import { UserPlus, Briefcase, BarChart3, Award } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Create Account',
    description: 'Sign up in seconds with your email and start tracking immediately.',
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Add Applications',
    description: 'Log your job applications with company, position, status, and date.',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Track Progress',
    description: 'Monitor your success rate, interviews, and application velocity.',
    color: 'from-emerald-600 to-green-600',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Land Your Dream Job',
    description: 'Use insights to optimize your job search and get hired faster.',
    color: 'from-rose-600 to-red-600',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            DevApply
          </span>{' '}
          Works
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Four simple steps to take control of your job search journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-surface border border-border rounded-2xl p-6 text-center hover:border-violet-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                {index + 1}
              </div>
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-slate-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;