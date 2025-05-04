import { cva } from 'class-variance-authority';

export const magneticVariance = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium ring-offset-background transition-colors before:absolute before:left-[-10%] before:top-[-10%] before:h-0 before:w-[120%] before:translate-y-3/4 before:scale-0 before:rounded-full before:pb-[120%] before:content-[""] after:absolute after:inset-0 after:size-full after:-translate-y-full after:rounded-full after:transition-transform after:duration-300 after:ease-in-expo after:content-[""] hover:before:translate-y-0 hover:before:scale-100 hover:before:transition-transform hover:before:duration-300 hover:before:ease-in-expo hover:after:translate-y-0 hover:after:transition-transform hover:after:delay-300 hover:after:duration-75 hover:after:ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent before:bg-white/50 after:bg-black/50',
        primary:
          'bg-glass text-background backdrop-blur-md before:bg-white/50 after:bg-black/50',
        destructive:
          'bg-glass text-destructive-foreground before:bg-white/50 after:bg-black/50',
        secondary:
          'bg-black text-secondary-foreground before:bg-white/50 after:bg-black/50',
        ghost:
          'bg-glass text-destructive-foreground  backdrop-blur-md before:bg-white/50 after:bg-black/50',
        outline: 'border border-solid before:bg-white/50 after:bg-black/50',
      },
      size: {
        default: 'p-2 text-sm',
        md: 'px-8 py-10 text-base',
        lg: 'px-8 py-16 text-lg lg:px-12 lg:py-20',
        xl: 'px-10 py-16 text-lg lg:px-14 lg:py-20',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
