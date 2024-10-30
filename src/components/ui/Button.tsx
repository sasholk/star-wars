import { forwardRef } from 'react'

interface ButtonOptions {
  variant?: 'primary' | 'secondary' | 'outlined'
}

type Ref = HTMLButtonElement

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    children,
    className,
    variant = 'outlined',
    ...rest
  } = props

  return (
    <button
      ref={ref}
      className={`btn ${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
