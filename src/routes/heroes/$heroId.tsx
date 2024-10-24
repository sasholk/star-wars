import { PageTransition } from '@/components/shared/PageTransion'
import { HeroPage } from '@/pages/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/heroes/$heroId`)({
	component: () => (
		<PageTransition>
			<HeroPage />
		</PageTransition>
	)
})
