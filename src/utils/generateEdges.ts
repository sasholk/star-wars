import { getId } from './getId'
import { Film } from '@/types/Film'
import { Hero } from '@/types/Hero'
import { Starship } from '@/types/Ship'

/**
 * Generates an array of edges for the flow graph.
 *
 * Edges are generated as follows:
 * - A hero node is connected to each film node.
 * - Each film node is connected to each of its starship nodes, even if the starship already exists elsewhere in the graph.
 *
 * @param hero - The hero to generate edges for.
 * @param films - The films the hero appears in.
 * @param starships - The starships to connect to the films.
 * @returns An array of edges.
 */
export const generateEdges = (
	hero: Hero,
	films: Film[],
	starships: Starship[]
) => {
	const edges = [
		// Connect hero to each film
		...films.map(film => ({
			id: `edge-${hero.name}-film-${film.title}`,
			source: hero.name,
			target: `film-${film.title}`,
			type: 'default',
			style: { stroke: '#14b8a6' }
		})),

		// Connect each film to its starships, even if the starship already exists
		...films.flatMap(film => {
			const filmStarships = starships.filter(starship =>
				film.starships.includes(+getId(starship.url))
			)

			return filmStarships.map(starship => ({
				id: `edge-film-${film.title}-starship-${starship.id}`,
				source: `film-${film.title}`,
				target: `starship-${starship.id}`,
				type: 'default',

				style: { stroke: '#14b8a6' }
			}))
		})
	]

	return edges
}
