import { Hero } from '../../../types/Hero'
import { Card } from '../Card'
import { CardSkeleton } from '../Card/CardSkeleton'
import { useHeroes } from '@/hooks/useHeroes'
import React from 'react'

interface Props {
	className?: string
	data?: Hero[]
}

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
