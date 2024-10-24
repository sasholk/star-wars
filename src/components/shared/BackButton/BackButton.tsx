import Button from '@/components/ui/Button'
import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const BackButton: React.FC<Props> = ({ className }) => {
	const router = useRouter()

	const handleClick = () => {
		router.history.back()
	}

	return (
		<Button
			onClick={handleClick}
			className={`${className} border-slate-600 bg-slate-700 p-2 text-slate-400 hover:bg-slate-600 hover:text-slate-300`}
		>
			<ArrowLeft />
		</Button>
	)
}
