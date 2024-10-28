import heroService from '@/api/hero.service'
import { useQuery } from '@tanstack/react-query'

export function useSearchByHero(value?: string) {
	return useQuery({
		queryKey: ['filteredHero', value],
		queryFn: async () => heroService.getByName(value!),
		select: data => data
	})
}
