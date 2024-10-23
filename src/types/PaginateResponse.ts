export interface PaginatedResponse<T> {
	pages: Page<T>[]
	pageParams: number[]
}

export interface Page<T> {
	results: T[]
	nextPage?: number
}
