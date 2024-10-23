import { forwardRef } from 'react'

interface ButtonOptions {}

type Ref = HTMLButtonElement

export type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> &
	ButtonOptions

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
	const { type = 'button', children, className, ...rest } = props
	return (
		<button
			ref={ref}
			className={`btn ${className}`}
			{...rest}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'
export default Button
