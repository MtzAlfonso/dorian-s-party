import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div className="absolute inset-0 bg-light bg-opacity-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primary" />
    </motion.div>
  );
};
