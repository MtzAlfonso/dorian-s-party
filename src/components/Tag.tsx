import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  danger: 'border-red-500 text-red-800 bg-red-100',
  success: 'border-teal-500 text-teal-800 bg-teal-100',
  primary: 'border-indigo-500 text-indigo-800 bg-indigo-100',
  secondary: 'border-gray-500 text-gray-800 bg-gray-100',
  warning: 'border-amber-500 text-amber-800 bg-amber-100',
  info: 'border-blue-500 text-blue-800 bg-blue-100',
};

interface ITagProps extends PropsWithChildren {
  variant?: keyof typeof variants;
}

export const Tag: FC<ITagProps> = ({ children, variant = 'primary' }) => {
  return (
    <span
      className={twMerge(
        'border rounded-xl px-2 py-1 text-xs',
        variants[variant]
      )}
    >
      {children}
    </span>
  );
};
