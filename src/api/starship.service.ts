import BaseService from './base.service'
import { Starship } from '@/types/Ship'

const ENDPOINT = '/starships'

interface StarshipResponse {
	results: Starship[]
}

class StarshipService extends BaseService {
	/**
	 * Fetches a list of starships for a given hero by heroId.
	 *
	 * @param heroId - The unique identifier of the hero for which to fetch starships.
	 * @returns A promise that resolves to the data containing the list of starships.
	 */
	async getStarshipsForHero(heroId: string): Promise<StarshipResponse> {
		const query = this.buildQuery({ pilots__contains: heroId })
		return this.get(`${ENDPOINT}/?${query}`)
	}
}

export default new StarshipService()
