import { useQuery } from '@tanstack/react-query'

import filmService from '@/api/film.service'

/**
 * Fetches a list of films for a given hero by heroId.
 * Sends a GET request to the films endpoint, filtering by characters that include the specified heroId.
 *
 * @param id - The unique identifier of the hero for which to fetch films.
 * @returns A promise that resolves to the data containing the list of films.
 */
export function useFilms(id: string) {
	return useQuery({
		queryKey: ['films', id],
		queryFn: async () => filmService.getFilmsForHero(id),
		select: data => data.results
	})
}
