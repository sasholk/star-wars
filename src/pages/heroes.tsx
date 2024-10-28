import { BackButton } from '@/components/shared/BackButton'
import Error from '@/components/shared/Error/Error'
import { HeroesCatalog } from '@/components/shared/HeroesCatalog'
import { SearchBar } from '@/components/shared/SearchBar/SearchBar'
import { useHeroes } from '@/hooks/useHeroes'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { useState } from 'react'

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
