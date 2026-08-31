import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const APP_URL = 'https://devapply-alpha.vercel.app';

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Job Search?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Join thousands of job seekers tracking their applications with DevApply.
          Start for free – no credit card required.
        </p>
        <a
          href={`${APP_URL}/register`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Start Tracking Now
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;