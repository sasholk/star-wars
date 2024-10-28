import { BobaFett, BobaFilms, BobaStarship } from '@/constants/dataForTests'
import { Film } from '@/types/Film'
import { Hero } from '@/types/Hero'
import { Starship } from '@/types/Ship'
import { generateNodes } from '@/utils/generateNodes'
import { Position } from '@xyflow/react'

// Mock the getId function to control ID extraction
jest.mock('@/utils/getId', () => ({
	getId: jest.fn((url: string) => url.match(/\d+/)?.[0] || '')
}))

describe('generateNodes', () => {
	const hero: Hero = BobaFett
	const films: Film[] = BobaFilms
	const starships: Starship[] = BobaStarship

	it('should generate a hero node at the origin', () => {
		const nodes = generateNodes(hero, films, starships)

		const heroNode = nodes.find(node => node.id === hero.name)

		expect(heroNode).toBeDefined()
		expect(heroNode).toEqual({
			id: 'Boba Fett',
			data: { category: 'character', name: 'Boba Fett', id: hero.id },
			position: { x: 0, y: 0 },
			type: 'custom',
			targetPosition: Position.Top,
			sourcePosition: Position.Bottom
		})
	})

	it('should generate film nodes with correct horizontal spacing', () => {
		const nodes = generateNodes(hero, films, starships)

		const filmNodes = films.map((film, index) => ({
			id: `film-${film.title}`,
			data: { category: 'film', name: film.title, id: film.id },
			position: {
				x: -(250 * (films.length - 1)) / 2 + 250 * index, // Correct horizontal positioning
				y: 120
			},
			type: 'custom',
			targetPosition: Position.Top,
			sourcePosition: Position.Bottom
		}))

		filmNodes.forEach(filmNode => {
			expect(nodes).toContainEqual(filmNode)
		})
	})

	it('should generate starship nodes vertically below their corresponding film nodes', () => {
		const nodes = generateNodes(hero, films, starships)

		const attackOfClonesStarshipNode = nodes.find(
			node => node.id === 'starship-21' && node.position.y > 120
		)

		expect(attackOfClonesStarshipNode).toEqual({
			id: 'starship-21',
			data: { category: 'starship', name: 'Slave 1', id: 21 },
			position: { x: -(250 * (films.length - 1)) / 2, y: 240 }, // Below 'Attack of the Clones' film node
			type: 'custom',
			targetPosition: Position.Top,
			sourcePosition: Position.Bottom
		})
	})

	it('should not generate duplicate starship nodes', () => {
		const nodes = generateNodes(hero, films, starships)

		const starshipIds = nodes
			.filter(node => node.data.category === 'starship')
			.map(node => node.id)

		const uniqueStarshipIds = Array.from(new Set(starshipIds))

		expect(starshipIds.length).toBe(uniqueStarshipIds.length)
	})

	it('should return an empty array if no films or starships are provided', () => {
		const nodes = generateNodes(hero, [], [])

		expect(nodes).toEqual([
			{
				id: 'Boba Fett',
				data: { category: 'character', name: 'Boba Fett', id: hero.id },
				position: { x: 0, y: 0 },
				type: 'custom',
				targetPosition: Position.Top,
				sourcePosition: Position.Bottom
			}
		])
	})
})
