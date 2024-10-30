import heroService from '@/api/hero.service'
import { useQuery } from '@tanstack/react-query'

/**
 * Fetches a hero by id from the API.
 *
 * @param id - The unique identifier of the hero to fetch.
 * @returns A promise that resolves to the hero data.
 */
export function useHero(id: string) {
  return useQuery({
    queryKey: ['hero', id],
    queryFn: async () => heroService.getById(id),
    select: data => data
  })
}
