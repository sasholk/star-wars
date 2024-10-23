import groguImage from '@img/grogu.svg'
import StarButton from '../components/ui/StarButton'
export const HomePage: React.FC = () => {
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-3xl font-bold'>Welcome</h1>
			<p>
				Ever wondered what it's like to hang out with Luke Skywalker, chill with
				Yoda, or maybe borrow Han Solo’s Millennium Falcon for a weekend spin?
				<br />
				<br />
				Well, you’re in luck! Explore the galaxy’s finest collection of Star
				Wars characters, and dive deep into their epic journeys through films
				and starships—all neatly displayed in a galactic graph (yeah, we’re
				fancy like that). May the scroll be with you! 🌌🚀
			</p>

			<StarButton name='Explore' />

			<img
				src={groguImage}
				className='h-52 w-52 self-end'
				alt='Image'
			/>
		</div>
	)
}
