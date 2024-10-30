import BaseService from './base.service'
import { Hero } from '@/types/Hero'
import { HeroResponse } from '@/types/HeroResponse'

const ENDPOINT = '/people'

class HeroService extends BaseService {
  /**
   * Fetches a paginated list of heroes, with optional search query.
   *
   * @param pageParam - The page number to fetch.
   * @param searchQuery - Optional search query to filter heroes by name.
   * @returns An object containing an array of hero results and the next page number if available.
   */
  async getAll(pageParam: number, searchQuery: string = '') {
    const query = this.buildQuery({
      page: pageParam,
      search: searchQuery
    })

    const data = await this.get<HeroResponse>(`${ENDPOINT}?${query}`)

    return {
      results: data.results ?? [], // Fallback to empty array if results are undefined
      nextPage: data.next ? pageParam + 1 : undefined // Determine nextPage or return undefined
    }
  }

  /**
   * Fetches a hero by ID.
   *
   * @param id - The ID of the hero to fetch.
   * @returns The hero data.
   */
  async getById(id: string): Promise<Hero> {
    return this.get<Hero>(`${ENDPOINT}/${id}`)
  }
}

export default new HeroService()
