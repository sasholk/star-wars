import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { AnimatePresence, motion } from "framer-motion"

export const Route = createRootRoute({
	component: () => (
		<>
			<div className='container flex gap-2 p-2'>
				<Link
					to='/'
					className='[&.active]:font-bold'
				>
					Home
				</Link>
				<Link
					to='/heroes'
					className='[&.active]:font-bold'
				>
					Heroes
				</Link>
			</div>

			<div className='container'>
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
