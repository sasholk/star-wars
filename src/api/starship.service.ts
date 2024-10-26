import apiClient from './api.client'

const ENDPOINT = '/starships'

class StarshipService {
	async getStarshipsForFilms(heroId: string) {
		const { data } = await apiClient.get(
			`${ENDPOINT}/?pilots__contains=${heroId}`
		)
		return data
	}
}

export default new StarshipService()
