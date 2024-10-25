import starshipService from '@/api/starship.service'
import { useQuery } from '@tanstack/react-query'

export function useStarships(id: string) {
	return useQuery({
		queryKey: ['ships', id],
		queryFn: async () => starshipService.getStarshipsForFilms(id),
		select: data => data.results
	})
}
