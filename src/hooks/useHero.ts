import { useQuery } from '@tanstack/react-query'

import heroService from '@/api/hero.service'

export function useHero(id: string) {
	return useQuery({
		queryKey: ['hero', id],
		queryFn: async () => heroService.getById(id),
		select: data => data
	})
}
