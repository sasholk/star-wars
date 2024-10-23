import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AnimatePresence, motion } from 'framer-motion'
import LinkAnimation from '../components/ui/StarButton'

export const Route = createRootRoute({
	component: () => (
		<>
			<div className='container my-4 flex gap-8 px-4 md:px-8 lg:px-12'>
				<Link
					to='/'
					className='[&.active]:font-bold [&.active]:text-white'
				>
					<LinkAnimation name='Home' />
				</Link>
				<Link
					to='/heroes'
					className='[&.active]:font-bold [&.active]:text-white'
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
						variants={{
							initial: { opacity: 0, x: -50 },
							animate: { opacity: 1, x: 0 },
							exit: { opacity: 0, x: 50 }
						}}
						transition={{ duration: 0.3 }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
				<TanStackRouterDevtools />
			</div>
		</>
	)
})
