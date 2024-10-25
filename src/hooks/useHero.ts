import heroService from '@/api/hero.service'
import { useQuery } from '@tanstack/react-query'

export function useHero(id: string) {
	return useQuery({
		queryKey: ['hero', id],
		queryFn: async () => heroService.getById(id),
		select: data => data
	})
}
