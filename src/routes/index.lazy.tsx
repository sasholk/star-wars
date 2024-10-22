// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className='p-2'>
			<h1>Welcome</h1>
			<p>
				Ever wondered what it's like to hang out with Luke Skywalker, chill with
				Yoda, or maybe borrow Han Solo’s Millennium Falcon for a weekend spin?
				<br />
				<br />
				Well, you’re in luck! Explore the galaxy’s finest collection of Star
				Wars characters, and dive deep into their epic journeys through films
				and starships—all neatly displayed in a galactic graph (yeah, we’re
				fancy like that). May the scroll be with you! 🌌🚀
			</p>
		</div>
	)
}
