import { BackButton } from '@/components/shared/BackButton'
import { Flow } from '@/components/shared/Flow'
import { Loader } from '@/components/ui/Loader'
import { STATUS_ERROR, STATUS_PENDING } from '@/constants/status.constants'
import { useFilms } from '@/hooks/useFilms'
import { useHero } from '@/hooks/useHero'
import { useStarships } from '@/hooks/useStarships'
import { generateEdges } from '@/utils/generateEdges'
import { generateNodes } from '@/utils/generateNodes'
import { useParams } from '@tanstack/react-router'
import React from 'react'

/**
 * The HeroPage component renders a hero's details page.
 *
 * @description
 * This page is rendered when the user navigates to `/heroes/:heroId`.
 * It fetches the hero, films, and starships data using the `useHero`,
 * `useFilms`, and `useStarships` hooks respectively, and renders a
 * `Flow` component with the generated nodes and edges.
 *
 * If the data is still loading, it displays a `Loader` component.
 * If there was an error fetching the data, it displays an error message.
 *
 * @returns {React.ReactElement} The rendered hero details page.
 */
export const HeroPage: React.FC = () => {
  const heroId = useParams({
    from: '/heroes/$heroId',
    select: params => params.heroId
  })

  const { data: hero, status: heroStatus } = useHero(heroId)
  const { data: films, status: filmsStatus } = useFilms(heroId)
  const { data: ships, status: shipsStatus } = useStarships(heroId)

  const isLoading = [heroStatus, filmsStatus, shipsStatus].includes(
    STATUS_PENDING
  )
  const isError = [heroStatus, filmsStatus, shipsStatus].includes(STATUS_ERROR)

  if (isLoading) return <Loader />
  if (isError) return <div>Error loading data, please try again</div>

  const nodes = generateNodes(hero!, films!, ships!)
  const edges = generateEdges(hero!, films!, ships!)

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
