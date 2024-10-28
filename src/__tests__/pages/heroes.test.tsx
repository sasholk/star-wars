import { HeroesPage } from '@/pages/heroes'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

// Mock useHeroes hook to prevent API requests
jest.mock('@/hooks/useHeroes', () => ({
	useHeroes: jest.fn((searchQuery: string) => ({
		data: searchQuery
			? [{ name: 'Yoda' }]
			: [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }],
		error: null,
		fetchNextPage: jest.fn(),
		hasNextPage: false,
		status: 'success'
	}))
}))

// Mock useInfiniteScroll hook to prevent any scrolling behavior
jest.mock('@/hooks/useInfiniteScroll', () => jest.fn())

// Mocking components
jest.mock('@/components/shared/SearchBar/SearchBar', () => ({
	SearchBar: ({ onSearch }: { onSearch: (query: string) => void }) => (
		<input
			placeholder='write a hero name'
			onChange={e => onSearch(e.target.value)}
			data-testid='search-input'
		/>
	)
}))

jest.mock('@/components/shared/HeroesCatalog', () => ({
	HeroesCatalog: ({ data }: { data: Array<{ name: string }> }) => (
		<div data-testid='heroes-catalog'>
			{data.map(hero => (
				<div key={hero.name}>{hero.name}</div>
			))}
		</div>
	)
}))

jest.mock('@/components/shared/BackButton', () => ({
	BackButton: ({ clearSearch }: { clearSearch: () => void }) => (
		<button
			onClick={clearSearch}
			data-testid='back-button'
		>
			Back
		</button>
	)
}))

jest.mock('@/components/shared/Error/Error', () => ({
	Error: ({ error }: { error: string }) => (
		<div data-testid='error'>{error}</div>
	)
}))

describe('HeroesPage Component (No API Requests)', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render the SearchBar and initial list of heroes', () => {
		render(<HeroesPage />)

		expect(screen.getByPlaceholderText('write a hero name')).toBeInTheDocument()
		expect(screen.getByTestId('heroes-catalog')).toBeInTheDocument()
		expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
		expect(screen.getByText('Darth Vader')).toBeInTheDocument()
	})

	it('should update the search query and show filtered results', async () => {
		render(<HeroesPage />)

		const searchInput = screen.getByPlaceholderText('write a hero name')
		fireEvent.change(searchInput, { target: { value: 'Yoda' } })

		await waitFor(() => {
			expect(screen.getByText('Yoda')).toBeInTheDocument()
			expect(screen.queryByText('Luke Skywalker')).not.toBeInTheDocument()
			expect(screen.queryByText('Darth Vader')).not.toBeInTheDocument()
		})
	})

	it('should display "WOOOPS! There are no heroes" when no heroes match the search', () => {
		// Mock no data scenario
		const mockUseHeroes = require('@/hooks/useHeroes').useHeroes
		mockUseHeroes.mockReturnValueOnce({
			data: [],
			error: null,
			fetchNextPage: jest.fn(),
			hasNextPage: false,
			status: 'success'
		})

		render(<HeroesPage />)

		expect(screen.getByText('WOOOPS! There are no heroes')).toBeInTheDocument()
	})
})
