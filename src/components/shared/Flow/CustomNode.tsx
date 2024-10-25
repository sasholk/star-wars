import Image from '@/components/ui/Image'
import { Handle, Position } from '@xyflow/react'
import { RocketIcon } from 'lucide-react'
import { memo } from 'react'

interface Props {
	data: {
		id: number
		name: string
		category: string
	}
}

const CustomNode: React.FC<Props> = ({ data }) => {
	const { id, name, category } = data
	const srcLink = `https://starwars-visualguide.com/assets/img/${category}s/${id}.jpg`

	return (
		<div className='w-60 rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md'>
			<div className='flex'>
				<div className='flex h-12 w-12 items-center justify-center'>
					{category === 'starship' ? (
						<RocketIcon className='h-full w-full rounded-md bg-teal-100 p-2 text-teal-800' />
					) : (
						<Image
							src={srcLink}
							alt={name}
							className='h-full w-full'
						/>
					)}
				</div>

				<div className='ml-2'>
					<div className='w-36 truncate font-bold text-black'>{name}</div>
					<div className='text-gray-500'>{category}</div>
				</div>
			</div>

			<Handle
				type='target'
				position={Position.Top}
				className='w-16 !bg-teal-500'
			/>
			<Handle
				type='source'
				position={Position.Bottom}
				className='w-16 !bg-teal-500'
			/>
		</div>
	)
}

export default memo(CustomNode)
