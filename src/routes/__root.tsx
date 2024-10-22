import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: () => (
		<>
			<div className='p-2 flex gap-2'>
				<div className='container'>
					<Link to='/' className='[&.active]:font-bold'>
						Home
					</Link>{' '}
					<Link to='/heroes' className='[&.active]:font-bold'>
						Heroes
					</Link>
				</div>
			</div>
			<div className='container'>
				<Outlet />
				<TanStackRouterDevtools />
			</div>{' '}
		</>
	),
})
