import { Film } from '@/types/Film'
import { Hero } from '@/types/Hero'
import { Ship } from '@/types/Ship'
import { getId } from './getId'

export function generateEdges(hero: Hero, films: Film[], starships: Ship[]) {
	const edges = [
		// Connect hero to each film
		...films.map(film => ({
			id: `edge-${hero.name}-film-${film.title}`,
			source: hero.name,
			target: `film-${film.title}`
		})),

		// Connect each film to its starships, even if the starship already exists
		...films.flatMap(film => {
			const filmStarships = starships.filter(starship =>
				film.starships.includes(+getId(starship.url))
			)

			return filmStarships.map(starship => ({
				id: `edge-film-${film.title}-starship-${starship.id}`,
				source: `film-${film.title}`,
				target: `starship-${starship.id}`
			}))
		})
	]

	return edges
}
