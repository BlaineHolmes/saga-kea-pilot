import * as React from 'react'

function cn(...cls: Array<string | undefined | false>) { return cls.filter(Boolean).join(' ') }

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm text-foreground',
      'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
))
Input.displayName = 'Input'

export default Input

