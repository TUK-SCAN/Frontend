'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356DF3] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-blue-primary text-white hover:bg-white hover:text-blue-primary hover:border hover:border-blue-primary',
        secondary:
          'bg-black text-white hover:bg-white hover:text-blue-primary hover:border hover:border-blue-primary',
        disabled: 'bg-black-100 text-black-400 cursor-not-allowed',
      },
      size: {
        default: 'w-[380px] h-[48px]',
        lg: 'w-[380px] h-[60px]',
        md: 'w-[380px] h-[48px]',
        sm: 'w-[380px] h-[38px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = '', variant, size, disabled, onClick, children, ...props },
    ref
  ) => {
    const isDisabled = disabled ? 'disabled' : variant

    return (
      <button
        className={cn(buttonVariants({ variant: isDisabled, size }), className)}
        ref={ref}
        disabled={disabled}
        onClick={onClick} // page.tsx에서 전달된 onClick 호출
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
