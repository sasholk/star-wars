function debounce<T>(func: T, wait: number) {
	let timeout: number | null = null
	return function (...args: any[]) {
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}
}

export default debounce
