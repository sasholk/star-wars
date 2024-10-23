import React from 'react'
import Button from '../../ui/Button'
import Item from './Item'

interface Props {}

export const Card: React.FC<Props> = () => {
	return (
		<article className='flex flex-col gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4 md:p-8'>
			<header>
				<h3 className='text-2xl font-bold'>name</h3>
			</header>

			<main>
				<ul className='flex flex-col gap-4'>
					<Item
						label='label'
						info='info'
					/>
					<Item
						label='label'
						info='info'
					/>
					<Item
						label='label'
						info='info'
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
