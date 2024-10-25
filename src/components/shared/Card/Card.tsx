import { Link } from '@tanstack/react-router'
import React from 'react'
import { Hero } from '../../../types/Hero'
import Item from './Item'

interface Props {
	hero: Hero
}

export const Card: React.FC<Props> = ({ hero }) => {
	const { name, gender, birth_year, height, homeworld } = hero

	const heroDetails = [
		{ label: 'Gender', value: gender },
		{ label: 'Birth Year', value: birth_year },
		{ label: 'Homeworld', value: homeworld },
		{ label: 'Height', value: `${height} cm` }
	]

	return (
		<article className='flex flex-col justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4 md:p-8'>
			<header>
				<h3 className='text-2xl font-bold'>{name}</h3>
			</header>

			<main>
				<ul className='flex flex-col gap-4'>
					{heroDetails.map(({ label, value }) => (
						<Item
							key={label}
							label={label}
							info={value}
						/>
					))}
				</ul>
			</main>

			<footer className='flex justify-center'>
				<Link
					to={`/heroes/${hero.id}`}
					className='btn w-full text-nowrap py-1 text-center'
				>
					Check <span className='hidden md:inline'>more</span>
				</Link>
			</footer>
		</article>
	)
}
