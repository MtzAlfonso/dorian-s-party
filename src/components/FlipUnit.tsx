import { FC } from 'react';
import { motion } from 'framer-motion';

interface IFlipUnitProps {
  value: number;
  prevValue?: number;
  label: string;
}

export const FlipUnit: FC<IFlipUnitProps> = ({ value, label }) => {
  const displayValue = value.toString().padStart(2, '0');
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        key={value}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-neutral text-3xl w-14 flex items-center justify-center"
      >
        {displayValue}
      </motion.div>

      <span className="text-sm text-neutral text-center">{label}</span>
    </div>
  );
};
