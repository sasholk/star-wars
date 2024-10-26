import { Hero } from './Hero'

export interface HeroResponse {
	results: Hero[]
	next?: string
}
