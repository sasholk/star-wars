import apiClient from './api.client'

const ENDPOINT = '/films'

class FilmService {
	async getFilmsForHero(heroId: string) {
		const { data } = await apiClient.get(
			`${ENDPOINT}/?characters__contains=${heroId}`
		)
		return data
	}
}

export default new FilmService()
