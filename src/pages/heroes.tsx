import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchHeroes } from '../api/apiService'
import Error from '../components/shared/Error/Error'
import { HeroesCatalog } from '../components/shared/HeroesCatalog'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

// Main component for rendering the Heroes Page
export const HeroesPage: React.FC = () => {
	// Using React Query's useInfiniteQuery for infinite scrolling functionality
	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	} = useInfiniteQuery({
		queryKey: ['people'], // Unique key for caching and refetching
		queryFn: async ({ pageParam }) => fetchHeroes(pageParam),
		initialPageParam: 1,
		getNextPageParam: lastPage => lastPage.nextPage
	})

	// Ref to track the load more element, which will trigger data fetching when in view
	const loadMoreRef = useInfiniteScroll(hasNextPage, fetchNextPage)

	if (error)
		<Error
			fetchNextPage={fetchNextPage}
			error={error}
		/>

	// Rendering the UI
	return (
		<div className='mb-20 md:mt-10'>
			<h1 className='h1 mb-10'>Heroes collection</h1>

			<HeroesCatalog
				isLoading={isLoading}
				isFetchingNextPage={isFetchingNextPage}
				data={data}
			/>

			<div
				ref={loadMoreRef}
				className='mt-4 h-10'
			></div>
		</div>
	)
}
