import { useState } from 'react';
import { X, Play } from 'lucide-react';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
      >
        <Play size={18} />
        Watch Demo
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-3xl bg-surface rounded-2xl p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold mb-4">How DevApply Works</h3>
            <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
              <p className="text-slate-400">Demo video placeholder</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoModal;