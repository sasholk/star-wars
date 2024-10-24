import { fetchHeroById } from '@/api/api.service'
import { useQuery } from '@tanstack/react-query'

export function useHero(id: string) {
	return useQuery({
		queryKey: ['hero', id],
		queryFn: () => fetchHeroById(id)
	})
}
