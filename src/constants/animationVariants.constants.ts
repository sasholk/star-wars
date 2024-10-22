export const pageVariants = {
	initial: { opacity: 0, x: -100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 100 }
}

export const pageTransition = {
	type: "spring",
	stiffness: 300,
	damping: 30,
	duration: 0.4
}
