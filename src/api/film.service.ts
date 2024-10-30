import BaseService from './base.service'
import { Film } from '@/types/Film'

const ENDPOINT = '/films'

interface FilmsResponse {
  results: Film[]
}

class FilmService extends BaseService {
  /**
   * Retrieves a list of films for a given hero by heroId.
   *
   * @param heroId - The unique identifier of the hero for which to fetch films.
   * @returns A promise that resolves to the data containing the list of films.
   */
  async getFilmsForHero(heroId: string): Promise<FilmsResponse> {
    const query = this.buildQuery({ characters__contains: heroId })
    return this.get<FilmsResponse>(`${ENDPOINT}/?${query}`)
  }
}

export default new FilmService()
