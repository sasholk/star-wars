import { BackButton } from '@/components/shared/BackButton'
import { useHero } from '@/hooks/useHero'
import { useParams } from '@tanstack/react-router'
import React from 'react'

export const HeroPage: React.FC = () => {
	const heroId = useParams({
		from: '/heroes/$heroId',
		select: params => params.heroId
	})
	const { data, isLoading } = useHero(heroId)

	return (
		<div className='flex flex-col gap-10'>
			<BackButton className='mt-4' />

			<h1 className='h1'>
				{isLoading && <div>Loading...</div>}
				{data?.name}
			</h1>
		</div>
	)
}
