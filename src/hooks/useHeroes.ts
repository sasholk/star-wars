import { fetchHeroes } from '@/api/api.service'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useHeroes = () => {
	return useInfiniteQuery({
		queryKey: ['heroes'], // Unique key for caching and refetching
		queryFn: async ({ pageParam }) => fetchHeroes(pageParam),
		initialPageParam: 1,
		getNextPageParam: lastPage => lastPage.nextPage
	})
}
