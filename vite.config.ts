import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, './src'), // alias for src
			},
			{
				find: '@img',
				replacement: path.resolve(__dirname, './public/img'), // alias for public/img
			},
		],
	},
})
