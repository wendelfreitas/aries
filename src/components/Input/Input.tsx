import * as React from 'react';
import { tv } from 'tailwind-variants';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const inputVariants = tv({
  base: 'flex h-10 w-full rounded-md border border-primary-900 text-white bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputVariants({ className })}
        ref={ref}
        {...props}
      />
    );
  }
);
