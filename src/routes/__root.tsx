import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

import { rootVariants } from '@/constants/animationVariants.constants'

import LinkAnimation from '../components/ui/LinkAnimation'

export const Route = createRootRoute({
	component: () => (
		<>
			<div className='container my-4 flex gap-8 px-4 md:px-8 lg:px-12'>
				<Link
					to='/'
					className='[&.active]:font-bold'
				>
					<LinkAnimation name='Home' />
				</Link>
				<Link
					to='/heroes'
					className='[&.active]:font-bold'
				>
					<LinkAnimation name='Heroes' />
				</Link>
			</div>

			<div className='container px-4 md:px-8 lg:px-12'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={location.pathname}
						initial='initial'
						animate='animate'
						exit='exit'
						variants={rootVariants}
						transition={{ duration: 0.3 }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	)
})
