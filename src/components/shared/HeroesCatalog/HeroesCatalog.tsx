import { InfiniteData } from '@tanstack/react-query'
import React from 'react'
import { Hero } from '../../../types/Hero'
import { HeroResponse } from '../../../types/HeroResponse'
import { Card } from '../Card'
import { CardSkeleton } from '../Card/CardSkeleton'

interface Props {
	isLoading: boolean
	data?: InfiniteData<HeroResponse>
	isFetchingNextPage?: boolean
	className?: string
}

export const HeroesCatalog: React.FC<Props> = ({
	isLoading,
	data,
	isFetchingNextPage
}) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-6'>
			{isLoading &&
				[...Array(8)].map((_, index) => <CardSkeleton key={index} />)}

			{data?.pages.map(page =>
				page.results.map((hero: Hero) => (
					<Card
						key={hero.id}
						hero={hero}
					/>
				))
			)}

			{isFetchingNextPage &&
				[...Array(4)].map((_, index) => <CardSkeleton key={index} />)}
		</div>
	)
}

export default HeroesCatalog
