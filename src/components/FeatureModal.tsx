import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function FeatureModal({ isOpen, onClose, title, children }: FeatureModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-minecraft/20 to-emerald-600/20 border-b border-gray-700/50 px-6 py-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white pr-10">{title}</h2>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
