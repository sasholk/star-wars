// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.

import { createLazyFileRoute } from '@tanstack/react-router'
import { PageTransition } from '../../components/shared/PageTransion'
import { HeroesPage } from '../../pages/heroes'

export const Route = createLazyFileRoute('/heroes/')({
  component: Heroes,
})

export function Heroes() {
  return (
    <PageTransition>
      <HeroesPage />
    </PageTransition>
  )
}
