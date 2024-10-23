import { Card } from '../components/shared/Card/Card'

export const HeroesPage: React.FC = () => {
	return (
		<div className='mb-20 md:mt-10'>
			<h1 className='h1 mb-10'>Heroes collection</h1>

			<div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-6'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}
