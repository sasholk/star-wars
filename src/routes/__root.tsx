import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: () => (
		<>
			<header className='p-2 flex gap-10'>
				<Link to='/' className='active:font-bold'>
					Home
				</Link>{' '}
				<Link to='/heroes' className='active:font-bold'>
					Heroes
				</Link>
			</header>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
