import { motion } from 'framer-motion'

import { pageTransition, pageVariants } from './constants'

interface Props {
	children: React.ReactNode
}

/**
 * A component that provides a page transition effect using Framer Motion.
 *
 * This component wraps its children in a `motion.div` element with defined
 * animation variants and transition properties, enabling smooth transitions
 * between page routes.
 *
 * @param {Props} props - The props for the PageTransition component.
 * @param {React.ReactNode} props.children - The content to be wrapped and animated.
 *
 * @returns {React.ReactElement} The wrapped component with transition effects.
 */
export const PageTransition = ({ children }: Props) => {
	return (
		<motion.div
			initial='initial'
			animate='animate'
			exit='exit'
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	)
}
