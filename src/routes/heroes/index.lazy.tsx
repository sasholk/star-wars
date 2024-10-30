// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.
import { PageTransition } from '@/components/shared/PageTransion'
import { HeroesPage } from '@/pages/heroes'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/heroes/')({
  component: Heroes
})

/**
 * The Heroes route component.
 *
 * This component is the root route of the '/heroes' route and is
 * responsible for rendering the HeroesPage component.
 *
 * It wraps the HeroesPage in a PageTransition component, which
 * provides a nice animation when navigating between routes.
 */
export function Heroes() {
  return (
    <PageTransition>
      <HeroesPage />
    </PageTransition>
  )
}
