import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 50 applications',
      'Basic analytics',
      'Status tracking',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'border-border',
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'For serious job seekers',
    features: [
      'Unlimited applications',
      'Advanced analytics',
      'Interview scheduling',
      'Priority support',
      'Export to CSV',
      'Custom tags',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'border-violet-500',
  },
];

const Pricing = () => {
  const APP_URL = import.meta.env.VITE_APP_URL || 'https://devapply-alpha.vercel.app';

  return (
    <section id="pricing" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple,{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            Transparent
          </span>{' '}
          Pricing
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Choose the plan that works best for you. Upgrade or cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-surface border ${plan.color} rounded-2xl p-8 hover:border-violet-500/40 transition-all duration-300 ${
              plan.popular ? 'md:scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-1 rounded-full text-xs font-medium text-white">
                Most Popular
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{plan.description}</p>
            </div>

            <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-green-500">✓</span> {feature}
                </li>
                ))}
            </ul>

            <a
              href={`${APP_URL}/register`}
              className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;