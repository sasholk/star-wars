import Button from '@/components/ui/Button'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
	onSearch: (query: string) => void
	clearInput?: boolean
	className?: string
}

/**
 * A search bar component that fires a callback with the search query when the
 * form is submitted.
 *
 * @param {{ onSearch: (query: string) => void, className?: string, clearInput?: boolean }} props
 * @prop {function} onSearch - The callback to call when the form is submitted
 * @prop {string} [className] - Additional CSS classes to apply to the form
 * @prop {boolean} [clearInput] - If true, the input field will be cleared when
 *   `clearInput` is set to true
 * @returns {React.ReactElement} The search bar component
 */
export const SearchBar: React.FC<Props> = ({
	onSearch,
	className,
	clearInput
}) => {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(inputValue)
	}

	useEffect(() => {
		if (clearInput) setInputValue('')
	}, [clearInput])

	return (
		<form
			onSubmit={handleSubmit}
			className={`w-full lg:w-[400px] ${className}`}
		>
			<label
				htmlFor='default-search'
				className='sr-only'
			>
				Search
			</label>

			<div className='relative'>
				<div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
					<Search
						size={16}
						color='#808080'
					/>
				</div>

				<input
					type='search'
					id='default-search'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					className='block w-full rounded-lg border border-slate-700 bg-slate-800 p-4 ps-10 text-sm text-gray-200 focus:border-cyan-500 focus:ring-cyan-500'
					placeholder='write a hero name'
					required
				/>

				<Button
					type='submit'
					variant='primary'
					className='absolute bottom-2.5 end-2.5'
				>
					Search
				</Button>
			</div>
		</form>
	)
}
