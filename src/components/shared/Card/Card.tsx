import React from 'react'
import { Hero } from '../../../types/Hero'
import Button from '../../ui/Button'
import Item from './Item'

interface Props {
	hero: Hero
}

export const Card: React.FC<Props> = ({ hero }) => {
	const { name, gender, birth_year, height, homeworld } = hero

	return (
		<article className='flex flex-col justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4 md:p-8'>
			<header>
				<h3 className='text-2xl font-bold'>{name}</h3>
			</header>

			<main>
				<ul className='flex flex-col gap-4'>
					<Item
						label='gender'
						info={`${gender}`}
					/>
					<Item
						label='birth year'
						info={`${birth_year}`}
					/>
					<Item
						label='homeworld'
						info={`${homeworld}`}
					/>
					<Item
						label='height'
						info={`${height}`}
					/>
				</ul>
			</main>

			<footer className='flex justify-center'>
				<Button className='w-full text-nowrap py-1'>
					Check <span className='hidden md:inline'>more</span>
				</Button>
			</footer>
		</article>
	)
}
