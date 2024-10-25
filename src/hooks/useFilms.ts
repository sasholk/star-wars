import filmService from '@/api/film.service'
import { useQuery } from '@tanstack/react-query'

export function useFilms(id: string) {
	return useQuery({
		queryKey: ['films', id],
		queryFn: async () => filmService.getFilmsForHero(id),
		select: data => data.results
	})
}