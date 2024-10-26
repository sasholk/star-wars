import { useQuery } from '@tanstack/react-query'

import starshipService from '@/api/starship.service'

export function useStarships(id: string) {
	return useQuery({
		queryKey: ['ships', id],
		queryFn: async () => starshipService.getStarshipsForFilms(id),
		select: data => data.results
	})
}
