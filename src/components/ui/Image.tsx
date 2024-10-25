import React from 'react'

interface Props {
	src: string
	alt?: string
	className?: string
}

const Image: React.FC<Props> = ({ src, alt = 'Image', className }) => {
	return (
		<div
			className={`relative overflow-hidden rounded-lg shadow-md ${className}`}
		>
			<img
				src={src}
				alt={alt}
				className='h-full w-full object-cover'
			/>
		</div>
	)
}

export default Image
