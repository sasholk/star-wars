import groguImage from '@img/grogu.svg'
import { Link } from '@tanstack/react-router'

/**
 * The HomePage component is the main entry point of the Star Explorer app.
 * It welcomes the user, explains the purpose of the app, and provides a link
 * to the Heroes page.
 *
 * The component renders a responsive UI with a div containing a heading,
 * a paragraph with a call to action, and a link to the Heroes page.
 * The heading displays the Star Explorer logo and the tagline.
 * The paragraph provides a brief description of the app and what it offers.
 * The link is a call to action to explore the Star Wars galaxy.
 *
 * The component also renders an image of Grogu (Baby Yoda) from the Disney+
 * series The Mandalorian.
 *
 * The component is optimized for desktop and mobile devices.
 */
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
