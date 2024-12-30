'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356DF3] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[#356DF3] text-white hover:bg-white hover:text-[#356DF3] hover:border hover:border-[#356DF3]',
        secondary:
          'bg-black text-white hover:bg-white hover:text-[#356DF3] hover:border hover:border-[#356DF3]',
        disabled: 'bg-[#CFD1DE] text-black cursor-not-allowed',
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
  ({ className = '', variant, size, disabled, onClick, ...props }, ref) => {
    const isDisabled = disabled ? 'disabled' : variant

    return (
      <button
        className={cn(buttonVariants({ variant: isDisabled, size }), className)}
        ref={ref}
        {...props}
        disabled={disabled}
        onClick={onClick}
      />
    )
  }
)
Button.displayName = 'Button'

export const ButtonGrid = () => {
  return (
    <div className="flex flex-col gap-4">
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <Button variant="primary" size={size}>
            Primary
          </Button>
          <Button variant="secondary" size={size}>
            Secondary
          </Button>
          <Button variant="primary" size={size} disabled>
            Primary Disabled
          </Button>
          <Button variant="secondary" size={size} disabled>
            Secondary Disabled
          </Button>
        </div>
      ))}
    </div>
  )
}

export { Button, buttonVariants }
