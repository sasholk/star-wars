import { BobaFett, BobaFilms, BobaStarship } from '@/constants/dataForTests'
import { Film } from '@/types/Film'
import { Hero } from '@/types/Hero'
import { Starship } from '@/types/Ship'
import { generateEdges } from '@/utils/generateEdges'

// Mock the getId function to control ID extraction
jest.mock('@/utils/getId', () => ({
  getId: jest.fn((url: string) => {
    const match = url.match(/\d+/)
    let id = ''
    if (match) id = match[0].toString()
    return id
  })
}))

describe('generateEdges', () => {
  const hero: Hero = BobaFett
  const films: Film[] = BobaFilms
  const starships: Starship[] = BobaStarship

  it("should generate edges connecting each film to Boba Fett's starship", () => {
    const edges = generateEdges(hero, films, starships)

    // Look for the specific edges
    const attackOfClonesEdge = edges.find(
      edge => edge.id === 'edge-film-Attack of the Clones-starship-21'
    )
    const empireStrikesBackEdge = edges.find(
      edge => edge.id === 'edge-film-The Empire Strikes Back-starship-21'
    )

    expect(attackOfClonesEdge).toEqual({
      id: 'edge-film-Attack of the Clones-starship-21',
      source: 'film-Attack of the Clones',
      target: 'starship-21',
      type: 'default',
      style: { stroke: '#14b8a6' }
    })

    expect(empireStrikesBackEdge).toEqual({
      id: 'edge-film-The Empire Strikes Back-starship-21',
      source: 'film-The Empire Strikes Back',
      target: 'starship-21',
      type: 'default',
      style: { stroke: '#14b8a6' }
    })
  })
})
