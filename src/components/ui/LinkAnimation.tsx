import { randomNumberBetween } from '../../utils/randomNumberBetween'
import { animate, stagger, useAnimate } from 'framer-motion'
import { Sparkle } from 'lucide-react'
import React from 'react'

// Define the type for animation sequences
type AnimationSequence = Parameters<typeof animate>[0]

interface Props {
	name: string
}

// Define the LinkAnimation component
export const LinkAnimation: React.FC<Props> = ({ name }) => {
	// Set up animation scope and control
	const [scope, animate] = useAnimate()

	// Handle the click event to trigger animations
	const handleClick = () => {
		// Create an array of 20 sparkles
		const sparkles = Array.from({ length: 20 })

		// Define the animation sequence for sparkles' initial appearance
		const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
			`.sparkle-${index}`,
			{
				x: randomNumberBetween(-100, 100), // Random X position
				y: randomNumberBetween(-100, 100), // Random Y position
				scale: randomNumberBetween(1.5, 2.5), // Random scale
				opacity: 1 // Set opacity to 1 (visible)
			},
			{
				duration: 0.4, // Duration of 0.4s
				at: '<' // Start animation concurrently
			}
		])

		// Define the fade-out animation for sparkles
		const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
			`.sparkle-${index}`,
			{
				opacity: 0, // Set opacity to 0 (invisible)
				scale: 0 // Set scale to 0 (shrink)
			},
			{
				duration: 0.3, // Duration of 0.3s
				at: '<' // Start animation concurrently
			}
		])

		// Reset sparkles to the original position
		const sparklesReset = Array.from(
			sparkles.map((_, index) => [
				`.sparkle-${index}`,
				{
					x: 0, // Reset X position
					y: 0 // Reset Y position
				},
				{
					duration: 0.000001 // Set a very short duration for the reset
				}
			])
		)

		// Execute the animation sequences
		animate([
			...sparklesReset, // Reset sparkles before animation
			['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }], // Move letters upwards with a staggered delay
			['button', { scale: 0.8 }, { duration: 0.1, at: '<' }], // Shrink the button
			['button', { scale: 1 }, { duration: 0.1 }], // Restore button scale
			...(Array.isArray(sparklesAnimation) ? sparklesAnimation : []), // Add sparkles animation
			['.letter', { y: 0 }, { duration: 0.000001 }], // Reset letters to the original position
			...(Array.isArray(sparklesFadeOut) ? sparklesFadeOut : []) // Add sparkles fade-out animation
		])
	}

	return (
		<div ref={scope}>
			<div
				onClick={handleClick}
				className='btn relative outlined'
			>
				<span
					className='block h-8 overflow-hidden'
					aria-hidden
				>
					{name.split('').map((letter, index) => (
						<span
							data-letter={letter}
							className='letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]'
							key={`${letter}-${index}`}
						>
							{letter}
						</span>
					))}
				</span>

				<span
					aria-hidden
					className='pointer-events-none absolute inset-0 -z-10 block'
				>
					{Array.from({ length: 20 }).map((_, index) => (
						<Sparkle
							className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
							color='cyan'
							fill='cyan'
							size={10}
						/>
					))}
				</span>
			</div>
		</div>
	)
}

export default LinkAnimation
