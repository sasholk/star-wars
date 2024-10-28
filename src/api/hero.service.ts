import apiClient from './api.client'
import { Hero } from '@/types/Hero'
import { HeroResponse } from '@/types/HeroResponse'

const ENDPOINT = '/people'

class HeroService {
/**
 * Fetches a paginated list of heroes, with optional search query.
 *
 * @param pageParam - The page number to fetch.
 * @param searchQuery - Optional search query to filter heroes by name.
 * @returns An object containing an array of hero results and the next page number if available.
 */
	async getAll(pageParam: number, searchQuery: string = '') {
		const { data } = await apiClient.get<HeroResponse>(
			`${ENDPOINT}?page=${pageParam}&search=${searchQuery.length ? searchQuery : ''}`
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
