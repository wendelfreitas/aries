import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';
import classNames from 'classnames';

export const variants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-primary-600 text-white shadow hover:bg-primary-700',
      secondary:
        'bg-secondary text-primary-500 border border-primary-400 hover:border-primary-300 hover:text-primary-400',
      outline:
        'border border-primary-600 bg-background text-white shadow-sm hover:border-primary-900 hover:text-accent-foreground',
      ghost:
        'hover:bg-gray-100 hover:text-accent-foreground focus-visible:ring-dark-200',
      danger:
        'bg-red-600 hover:bg-red-700 focus-visible:outline-red-600 text-white',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
    disabled: {
      true: 'opacity-60 pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      disabled,
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={classNames(variants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      />
    );
  }
);
