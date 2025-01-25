'use client'

import * as React from 'react'
import { cn } from '../../utils/cn'
import Icon from './Icon/Icon'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'error'
  size?: 'default' | 'lg' | 'md' | 'sm'
  showIcon?: boolean // 아이콘 표시 여부
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'default',
      disabled,
      showIcon = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary disabled:pointer-events-none group'

    const variantStyles = {
      primary: 'bg-blue-primary text-white hover:bg-black hover:text-white',
      secondary:
        'bg-blue-secondary text-blue-primary hover:bg-black hover:text-white',
      tertiary:
        'bg-white text-blue-primary border border-blue-primary hover:bg-blue-primary hover:text-white',
      disabled: 'bg-black-100 text-black-400 cursor-not-allowed',
      error: 'bg-error text-white cursor-not-allowed',
    }

    const sizeStyles = {
      default: 'w-[380px] h-[48px]',
      lg: 'w-[380px] h-[60px]',
      md: 'w-[380px] h-[48px]',
      sm: 'w-[380px] h-[38px]',
    }

    const isDisabled = disabled ? 'disabled' : variant

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[isDisabled],
          sizeStyles[size],
          className
        )}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {/* 아이콘 렌더링 */}
        {showIcon && (
          <Icon
            id="plus"
            className={cn(
              'mr-2',
              disabled
                ? 'text-black-400'
                : variant === 'secondary' || variant === 'tertiary'
                  ? 'text-blue-primary group-hover:text-white'
                  : 'text-white'
            )}
            width={20}
            height={20}
          />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
