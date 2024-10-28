import apiClient from './api.client'

const ENDPOINT = '/starships'

class StarshipService {
	/**
	 * Fetches a list of starships for a given hero by heroId.
	 * Sends a GET request to the starships endpoint, filtering by pilots that include the specified heroId.
	 *
	 * @param heroId - The unique identifier of the hero for which to fetch starships.
	 * @returns A promise that resolves to the data containing the list of starships.
	 */
	async getStarshipsForHero(heroId: string) {
		const { data } = await apiClient.get(
			`${ENDPOINT}/?pilots__contains=${heroId}`
		)
		return data
	}
}

export default new StarshipService()
