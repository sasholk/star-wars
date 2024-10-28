import { Hero } from '../../../types/Hero'
import { Card } from '../Card'
import { CardSkeleton } from '../Card/CardSkeleton'
import { useHeroes } from '@/hooks/useHeroes'
import React from 'react'

interface Props {
	className?: string
	data?: Hero[]
}

/**
 * A component that renders a grid of Hero cards.
 *
 * If no data is provided, it will display a loading state with 8 CardSkeleton components.
 *
 * If data is provided, it will render a Card component for each Hero in the array.
 *
 * If the useHeroes hook is fetching the next page, it will display a loading state with 4 CardSkeleton components.
 *
 * @prop {string} [className] - An optional className to apply to the container element.
 * @prop {Hero[]} [data] - An optional array of Hero data to render.
 *
 * @example
 * <HeroesCatalog />
 * <HeroesCatalog data={heroes} />
 */
export const HeroesCatalog: React.FC<Props> = ({ data }) => {
	const { isLoading, isFetchingNextPage } = useHeroes()

	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-6'>
			{isLoading &&
				[...Array(8)].map((_, index) => <CardSkeleton key={index} />)}

			{data &&
				!!data.length &&
				data.map((hero: Hero) => (
					<Card
						key={hero.id}
						hero={hero}
					/>
				))}

			{isFetchingNextPage &&
				[...Array(4)].map((_, index) => <CardSkeleton key={index} />)}
		</div>
	)
}

export default HeroesCatalog
