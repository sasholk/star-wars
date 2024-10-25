import { BackButton } from '@/components/shared/BackButton'
import { Flow } from '@/components/shared/Flow'
import { Loader } from '@/components/ui/Loader'
import { useFilms } from '@/hooks/useFilms'
import { useHero } from '@/hooks/useHero'
import { useStarships } from '@/hooks/useStarships'
import { generateEdges } from '@/utils/generateEdges'
import { generateNodes } from '@/utils/generateNodes'
import { useParams } from '@tanstack/react-router'
import React from 'react'

export const HeroPage: React.FC = () => {
	const heroId = useParams({
		from: '/heroes/$heroId',
		select: params => params.heroId
	})
	const { data: hero, status: heroStatus } = useHero(heroId)
	const { data: films, status: filmsStatus } = useFilms(heroId)
	const { data: ships, status: shipsStatus } = useStarships(heroId)

	if (
		heroStatus === 'pending' ||
		filmsStatus === 'pending' ||
		shipsStatus === 'pending'
	)
		return <Loader />

	const nodes = generateNodes(hero!, films, ships)
	const edges = generateEdges(hero!, films, ships)

	return (
		<div className='relative flex flex-col gap-10'>
			<div className='sticky top-0 mt-4 flex items-center justify-between gap-6'>
				<BackButton />

				<h1 className='text-3xl font-bold md:text-7xl'>{hero?.name}</h1>
			</div>

			<Flow
				nodes={nodes}
				edges={edges}
			/>
		</div>
	)
}
