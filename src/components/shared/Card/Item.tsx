import React from 'react'

interface Props {
	label: string
	info: string | number
}

const Item: React.FC<Props> = ({ label, info }) => {
	return (
		info !== 'unknown' && (
			<li className='flex gap-2'>
				<span className='rounded-md bg-slate-700 px-2'>{label}:</span>
				<span>{info}</span>
			</li>
		)
	)
}

export default Item
