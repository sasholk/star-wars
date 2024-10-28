import heroService from '@/api/hero.service'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useHeroes = (searchQuery: string = '') => {
	return useInfiniteQuery({
		queryKey: ['heroes', searchQuery], // Include searchQuery in the key
		queryFn: async ({ pageParam = 1 }) =>
			heroService.getAll(pageParam, searchQuery), // Pass searchQuery to getAll
		select: data => data.pages.flatMap(page => page.results),
		initialPageParam: 1,
		getNextPageParam: lastPage => lastPage.nextPage
	})
}
