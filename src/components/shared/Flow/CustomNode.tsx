import Image from '@/components/ui/Image'
import { IMAGE_BASE_URL } from '@/constants/url.constants'
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

/**
 * A custom node component for the flow graph.
 *
 * This component renders a div with a background gradient and rounded corners.
 * It contains an image of the hero or starship, and its name and category.
 * It also renders source and target handles of the node.
 *
 * @param {{ id: number, name: string, category: string }} data - The data of the node.
 *
 * @returns {React.ReactElement} The rendered node component.
 */
const CustomNode: React.FC<Props> = ({ data }) => {
	const { id, name, category } = data
	const srcLink = `${IMAGE_BASE_URL}/${category}s/${id}.jpg`

	return (
		<div className='w-60 rounded-md border-2 border-cyan-400 bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-2 shadow-md'>
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
