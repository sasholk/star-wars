import starshipService from '@/api/starship.service'
import { useQuery } from '@tanstack/react-query'

/**
 * Fetches a list of starships for a given hero by heroId.
 * Utilizes React Query's useQuery to manage the fetching state and cache.
 *
 * @param id - The unique identifier of the hero for which to fetch starships.
 * @returns A query object containing the list of starships and query status.
 */
export function useStarships(id: string) {
	return useQuery({
		queryKey: ['ships', id],
		queryFn: async () => starshipService.getStarshipsForHero(id),
		select: data => data.results
	})
}
