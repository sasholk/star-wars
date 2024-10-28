import Button from '@/components/ui/Button'
import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
	clearSearch?: () => void // Add a prop to clear search
}

export const BackButton: React.FC<Props> = ({ className, clearSearch }) => {
	const router = useRouter()

	const handleClick = () => {
		if (clearSearch) return clearSearch() // Clear the search state

		router.history.back() // Navigate back
	}

	return (
		<Button
			onClick={handleClick}
			variant='secondary'
			className={`btn px-2 py-2 ${className}`}
		>
			<ArrowLeft />
		</Button>
	)
}
