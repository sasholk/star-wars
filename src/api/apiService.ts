import { Hero } from '../types/Hero'
import { HeroResponse } from '../types/HeroResponse'
import apiClient from './apiClient'

export const fetchHeroes = async (
	pageParam: number
): Promise<{ results: Hero[]; nextPage?: number }> => {
	const { data } = await apiClient.get<HeroResponse>(
		`/people?page=${pageParam}`
	)
	return {
		results: data.results ?? [], // Fallback to empty array if results are undefined
		nextPage: data.next ? pageParam + 1 : undefined // Determine nextPage or return undefined
	}
}
