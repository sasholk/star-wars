import { motion } from 'framer-motion'

import { pageTransition, pageVariants } from './constants'

interface Props {
	children: React.ReactNode
}

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
