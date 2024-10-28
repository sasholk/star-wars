import { BackButton } from '@/components/shared/BackButton'
import Error from '@/components/shared/Error/Error'
import { HeroesCatalog } from '@/components/shared/HeroesCatalog'
import { SearchBar } from '@/components/shared/SearchBar/SearchBar'
import { useHeroes } from '@/hooks/useHeroes'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { useState } from 'react'

/**
 * The Heroes page component.
 *
 * This component is the root of the '/heroes' route and is
 * responsible for rendering a list of heroes based on the search query.
 *
 * It contains a search bar that allows the user to search for heroes by name.
 * The search query is stored in the component's state and passed to the
 * `useHeroes` hook to fetch the heroes from the API.
 *
 * The component also renders a list of heroes, which is fetched using the
 * `useHeroes` hook. If the search query is empty, it will render a list of all
 * heroes. If there are no heroes that match the search query, it will display
 * a message indicating that there are no heroes.
 *
 * The component also renders a "Back" button that allows the user to clear the
 * search query and input.
 *
 * The component uses the `useInfiniteScroll` hook to implement infinite
 * scrolling behavior. It will fetch the next page of heroes when the user
 * scrolls to the bottom of the list.
 */
export const HeroesPage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
  const [clearInput, setClearInput] = useState(false)

	// Fetch heroes with the current search query
	const { data, error, fetchNextPage, hasNextPage, status } =
		useHeroes(searchQuery)

	// Ref for infinite scroll
	const loadMoreRef = useInfiniteScroll(hasNextPage, fetchNextPage)

  // Function to clear the search query and input
  const clearSearch = () => {
    setSearchQuery('')
    setClearInput(true) // Set clearInput to true to reset the input field
  }
	if (error) {
		return <Error error={error} />
	}

	return (
		<div className='mb-20 md:mt-10'>
			<div className='mb-10 flex flex-col items-center justify-between gap-6 lg:flex-row'>
				<h1 className='h1'>Heroes collection</h1>

				<SearchBar onSearch={setSearchQuery} clearInput={clearInput} />
			</div>

			{!!searchQuery.length && (
				<BackButton
					clearSearch={clearSearch}
					className='mb-4'
				/>
			)}

			{status === 'success' && data.length === 0 && (
				<div className='col-span-full text-center text-red-500'>
					WOOOPS! There are no heroes
				</div>
			)}

			<HeroesCatalog data={data} />

			<div
				ref={loadMoreRef}
				className='mt-4 h-10'
			></div>
		</div>
	)
}
