import groguImage from '@img/grogu.svg'
import { Link } from '@tanstack/react-router'

export const HomePage: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-10 md:mt-10 md:flex-row'>
			<div className='flex flex-col gap-4 md:gap-12'>
				<h1 className='text-5xl font-bold md:text-7xl'>
					Welcome🖖{' '}
					<span className='hidden md:inline'>
						<br />
						Star Explorer!
					</span>
				</h1>
				<p className='flex flex-col gap-4 md:text-lg'>
					<span className='hidden md:inline'>
						Ever wondered what it's like to hang out with Luke Skywalker, chill
						with Yoda, or maybe borrow Han Solo’s Millennium Falcon for a
						weekend spin?
					</span>
					<span>
						Well, you’re in luck! Explore the galaxy’s finest collection of Star
						Wars characters, and dive deep into their epic journeys through
						films and starships—all neatly displayed in a galactic graph (yeah,
						we’re fancy like that). May the scroll be with you! 🌌🚀
					</span>
				</p>

				<Link
					to='/heroes'
					className='btn outlined'
				>
					Explore
				</Link>
			</div>

			<img
				src={groguImage}
				className='h-52 w-52'
				alt='Image'
			/>
		</div>
	)
}
