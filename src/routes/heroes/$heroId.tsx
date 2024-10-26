import { createFileRoute } from '@tanstack/react-router'

import { PageTransition } from '@/components/shared/PageTransion'

import { HeroPage } from '@/pages/hero'

export const Route = createFileRoute(`/heroes/$heroId`)({
	component: () => (
		<PageTransition>
			<HeroPage />
		</PageTransition>
	)
})
