import { Hero } from '@/types/Hero'
import { HeroResponse } from '@/types/HeroResponse'
import apiClient from './api.client'

const ENDPOINT = '/people'

class HeroService {
	async getAll(pageParam: number) {
		const { data } = await apiClient.get<HeroResponse>(
			`${ENDPOINT}?page=${pageParam}`
		)
		return {
			results: data.results ?? [], // Fallback to empty array if results are undefined
			nextPage: data.next ? pageParam + 1 : undefined // Determine nextPage or return undefined
		}
	}

	async getById(id: string) {
		const { data } = await apiClient.get<Hero>(`${ENDPOINT}/${id}`)
		return data
	}
}

export default new HeroService()
