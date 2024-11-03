import { Hero } from './Hero'

export type HeroResponse = {
  results: Hero[]
  next?: string
}
