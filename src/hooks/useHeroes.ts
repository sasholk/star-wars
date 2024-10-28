import heroService from '@/api/hero.service'
import { useInfiniteQuery } from '@tanstack/react-query'

/**
 * Fetches an infinite list of heroes, with optional search query.
 *
 * @param searchQuery - Optional search query to filter heroes by name.
 *
 * @returns An object containing an array of hero results and functions to fetch more data.
 */
export const useHeroes = (searchQuery: string = '') => {
	return useInfiniteQuery({
		queryKey: ['heroes', searchQuery],
		queryFn: async ({ pageParam = 1 }) =>
			heroService.getAll(pageParam, searchQuery),
		select: data => data.pages.flatMap(page => page.results),
		initialPageParam: 1,
		getNextPageParam: lastPage => lastPage.nextPage
	})
}
