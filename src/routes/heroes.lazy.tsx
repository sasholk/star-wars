// Route files with the .lazy.tsx extension are lazy loaded via separate bundles to keep the main bundle size as lean as possible.

import { createLazyFileRoute } from "@tanstack/react-router"
import { PageTransition } from "../components/shared/PageTransion/PageTransition"

export const Route = createLazyFileRoute("/heroes")({
	component: Heroes
})

export function Heroes() {
	return <PageTransition>Hello from Heroes!</PageTransition>
}
