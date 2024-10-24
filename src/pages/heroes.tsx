import Error from '@/components/shared/Error/Error'
import { HeroesCatalog } from '@/components/shared/HeroesCatalog'
import { useHeroes } from '@/hooks/useHeroes'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'

// Main component for rendering the Heroes Page
export const HeroesPage: React.FC = () => {
	const { error, fetchNextPage, hasNextPage } = useHeroes()

	// Ref to track the load more element, which will trigger data fetching when in view
	const loadMoreRef = useInfiniteScroll(hasNextPage, fetchNextPage)

	if (error) {
		return (
			<Error
				fetchNextPage={fetchNextPage}
				error={error}
			/>
		)
	}

	// Rendering the UI
	return (
		<div className='mb-20 md:mt-10'>
			<h1 className='h1 mb-10'>Heroes collection</h1>

			<HeroesCatalog />

			<div
				ref={loadMoreRef}
				className='mt-4 h-10'
			></div>
		</div>
	)
}
