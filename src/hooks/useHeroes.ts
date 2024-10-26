import { useInfiniteQuery } from '@tanstack/react-query'

import heroService from '@/api/hero.service'

export const useHeroes = () => {
	return useInfiniteQuery({
		queryKey: ['heroes'], // Unique key for caching and refetching
		queryFn: async ({ pageParam }) => heroService.getAll(pageParam),
		select: data => data.pages.flatMap(page => page.results),
		initialPageParam: 1,
		getNextPageParam: lastPage => lastPage.nextPage
	})
}
