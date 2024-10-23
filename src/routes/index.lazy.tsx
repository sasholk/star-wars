// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.
// import groguImage from "@img/grogu.jpg"
import { createLazyFileRoute } from '@tanstack/react-router'
import { PageTransition } from '../components/shared/PageTransion/PageTransition'
import { HomePage } from '../pages/home'

export const Route = createLazyFileRoute('/')({
	component: Index
})

function Index() {
	return (
		<PageTransition>
			<HomePage />
		</PageTransition>
	)
}
