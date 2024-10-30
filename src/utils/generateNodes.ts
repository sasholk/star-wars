import { getId } from './getId'
import { Film } from '@/types/Film'
import { Hero } from '@/types/Hero'
import { Starship } from '@/types/Ship'
import { Position } from '@xyflow/react'

const atributes = {
  type: 'custom',
  targetPosition: Position.Top,
  sourcePosition: Position.Bottom
}

/**
 * Generates an array of nodes for the flow graph.
 *
 * Nodes are generated as follows:
 * - A hero node is added at the origin.
 * - Each film is added horizontally spaced from each other.
 * - Each starship is added vertically below its corresponding film.
 *
 * @param hero - The hero to generate nodes for.
 * @param films - The films the hero appears in.
 * @param starships - The starships to connect to the films.
 * @returns An array of nodes.
 */
export function generateNodes(
  hero: Hero,
  films: Film[],
  starships: Starship[]
) {
  // Define initial positions
  const heroPosition = { x: 0, y: 0 }
  const filmSpacingX = 250 // Horizontal space between film nodes
  const filmStartX = -(filmSpacingX * (films.length - 1)) / 2 // Start position for film nodes
  const spacingY = 120 // Vertical distance between nodes

  // Track already rendered starships
  const renderedStarships: Set<number> = new Set()

  const nodes = [
    {
      id: hero.name,
      data: { category: 'character', name: hero.name, id: hero.id },
      position: heroPosition,
      ...atributes
    },
    ...films.flatMap((film, filmIndex) => {
      // Calculate film node position
      const filmX = filmStartX + filmIndex * filmSpacingX
      const filmNode = {
        id: `film-${film.title}`,
        data: { category: 'film', name: film.title, id: film.id },
        position: { x: filmX, y: spacingY },
        ...atributes
      }

      const filmStarships = starships.filter(starship =>
        film.starships.includes(+getId(starship.url))
      )

      // Calculate starship node positions under the current film node
      const starshipNodes = filmStarships
        .filter(starship => {
          // Deduplicate by checking if the starship has been rendered already
          const shipId = +getId(starship.url)
          if (renderedStarships.has(shipId)) {
            return false
          }

          renderedStarships.add(shipId)
          return true
        })
        .map((starship, starshipIndex) => {
          return {
            id: `starship-${starship.id}`,
            data: {
              category: 'starship',
              name: starship.name,
              id: starship.id
            },
            position: {
              x: filmX, // Aligns the starship with the film node
              y: spacingY + spacingY * (starshipIndex + 1) // Places each starship below the film node
            },
            ...atributes
          }
        })

      return [filmNode, ...starshipNodes]
    })
  ]

  return nodes
}
