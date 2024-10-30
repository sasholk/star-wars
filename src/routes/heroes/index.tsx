import { PageTransition } from '@/components/shared/PageTransion'
import { HeroesPage } from '@/pages/heroes'
import { createFileRoute } from '@tanstack/react-router'
import { fallback, zodSearchValidator } from '@tanstack/router-zod-adapter'
import { z } from 'zod'

const productSearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  search: fallback(z.string(), '').default('')
})

export const Route = createFileRoute('/heroes/')({
  component: Heroes,
  validateSearch: zodSearchValidator(productSearchSchema)
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
