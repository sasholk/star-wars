import { useCallback, useEffect, useRef } from 'react'

/**
 * Custom hook for implementing infinite scrolling behavior
 * It automatically triggers `fetchNextPage` when the target element becomes visible in the viewport
 */
const useInfiniteScroll = (
	hasNextPage: boolean | undefined,
	fetchNextPage: () => void
) => {
	// `loadMoreRef` will hold the DOM element that will trigger loading more content when it enters the viewport
	const loadMoreRef = useRef<HTMLDivElement | null>(null)

	/**
	 * IntersectionObserver callback function. It checks whether the target element is visible in the viewport
	 * If it is intersecting (visible) and there are more pages (`hasNextPage`), it calls the `fetchNextPage` function
	 */
	const handleObserver = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const target = entries[0]
			if (target.isIntersecting && hasNextPage) {
				fetchNextPage()
			}
		},
		[hasNextPage, fetchNextPage]
	)

	// Set up the IntersectionObserver in a useEffect hook to attach and clean up when the component mounts/unmounts
	useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 1.0 // Triggers when 100% of the target element is visible
		})

		// Attach the observer to the target element
		if (loadMoreRef.current) observer.observe(loadMoreRef.current)

		// Clean up the observer when the component unmounts or when `loadMoreRef` changes
		return () => {
			if (loadMoreRef.current) observer.unobserve(loadMoreRef.current)
		}
	}, [handleObserver])

	// Return the reference to be attached to the "load more" element
	return loadMoreRef
}

export default useInfiniteScroll
