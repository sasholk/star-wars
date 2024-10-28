import apiClient from './api.client'

const ENDPOINT = '/films'

class FilmService {
/**
 * Retrieves a list of films for a given hero by heroId.
 * Sends a GET request to the films endpoint, filtering by characters that include the specified heroId.
 *
 * @param heroId - The unique identifier of the hero for which to fetch films.
 * @returns A promise that resolves to the data containing the list of films.
 */
	async getFilmsForHero(heroId: string) {
		const { data } = await apiClient.get(
			`${ENDPOINT}/?characters__contains=${heroId}`
		)
		return data
	}
}

export default new FilmService()
