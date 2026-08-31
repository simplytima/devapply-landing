import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    content: 'DevApply helped me track 50+ applications and land my dream job at Google. The analytics feature showed me exactly where I needed to improve.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Microsoft',
    content: 'The interview conversion tracking is a game changer. I went from 10% interview rate to 45% in just two months.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Spotify',
    content: 'I love how simple and clean the UI is. It makes tracking job applications feel less stressful and more organized.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            Users Say
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Real stories from real job seekers who found success with DevApply.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
                />
              ))}
            </div>
            <p className="text-slate-300 text-sm mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-slate-400">{testimonial.role} at {testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;