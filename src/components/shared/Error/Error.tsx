import React from 'react'

interface Props {
	fetchNextPage: () => void
	error: Error
}

const Error: React.FC<Props> = ({ fetchNextPage, error }) => {
	return (
		<div className='flex flex-col items-center'>
			<p className='text-xl text-red-500'>Error: {error.message}</p>
			<button
				onClick={() => fetchNextPage()}
				className='btn mt-4'
			>
				Retry
			</button>
		</div>
	)
}

export default Error
