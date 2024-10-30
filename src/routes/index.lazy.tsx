// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.
import { PageTransition } from '@/components/shared/PageTransion'
import { HomePage } from '@/pages/home'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index
})

/**
 * The root route component.
 *
 * This component is the root route of the app and is
 * responsible for rendering the HomePage component.
 *
 * It wraps the HomePage in a PageTransition component,
 * which provides a nice animation when navigating between routes.
 */
function Index() {
  return (
    <PageTransition>
      <HomePage />
    </PageTransition>
  )
}
