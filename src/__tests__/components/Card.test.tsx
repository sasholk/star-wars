import { Card } from '@/components/shared/Card'
import { BobaFett } from '@/constants/dataForTests'
import { Hero } from '@/types/Hero'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// Mock the Link component from @tanstack/react-router
jest.mock('@tanstack/react-router', () => ({
	Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
		<a href={to}>{children}</a>
	)
}))

// Mock data for the hero
const mockHero: Hero = BobaFett

describe('Card Component', () => {
	const renderComponent = (hero: Hero) => render(<Card hero={hero} />)

	it('should render the hero name in the header', () => {
		renderComponent(mockHero)

		expect(screen.getByText('Boba Fett')).toBeInTheDocument()
	})

	it('should display hero details correctly', () => {
		renderComponent(mockHero)

		expect(screen.getByText('Gender:')).toBeInTheDocument()
		expect(screen.getByText('male')).toBeInTheDocument()
		expect(screen.getByText('Birth Year:')).toBeInTheDocument()
		expect(screen.getByText('31.5BBY')).toBeInTheDocument()
		expect(screen.getByText('Homeworld:')).toBeInTheDocument()
		expect(screen.getByText('10')).toBeInTheDocument()
		expect(screen.getByText('Height:')).toBeInTheDocument()
		expect(screen.getByText('183 cm')).toBeInTheDocument()
	})

	it('should render a link with the correct href to the hero details page', () => {
		renderComponent(mockHero)

		const link = screen.getByRole('link', { name: /Check more/i })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', '/heroes/22')
	})
})
