// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/heroes')({
	component: Heroes,
})

function Heroes() {
	return <div className='p-2'>Hello from Heroes!</div>
}
