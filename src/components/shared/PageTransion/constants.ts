export const pageVariants = {
	initial: { opacity: 0, x: -50, scale: 0.95 },
	animate: { opacity: 1, x: 0, scale: 1 },
	exit: { opacity: 0, x: 50, scale: 0.95 }
}

export const pageTransition = {
	duration: 0.5,
	ease: [0.4, 0, 0.2, 1] // Custom easing for a smoother transition
}
