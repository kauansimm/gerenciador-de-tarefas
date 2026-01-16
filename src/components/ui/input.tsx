import * as React from 'react'

import { cn } from '@/lib/utils'

interface InputParams extends React.ComponentProps<'input'> {
  startIcon?: () => React.JSX.Element
  endIcon?: () => React.JSX.Element
  inputClassName?: string
}

function Input({
  className,
  inputClassName,
  type,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: InputParams) {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        'bg-input border-input flex w-full min-w-0 items-center gap-2 rounded-md border px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none',
        type === 'file' && 'inline-flex border-0 bg-transparent',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
        props['aria-invalid'] &&
        'ring-destructive/20 dark:ring-destructive/40 border-destructive',
        props.disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        className
      )}
    >
      {StartIcon && <StartIcon />}
      <input
        className={cn(
          'text-foreground file:text-foreground selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground ring-offset-background flex w-full border-none bg-transparent py-0 text-base transition-[color,box-shadow] file:border-0 file:text-sm file:font-medium focus-visible:shadow-none focus-visible:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm 2xl:file:text-base',
          inputClassName
        )}
        ref={inputRef}
        type={type}
        data-slot='input'
        {...props}
      />
      {EndIcon && <EndIcon />}
    </div>
  )
}

export { Input }