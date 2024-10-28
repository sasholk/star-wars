export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},

	globals: {
		'ts-jest': {
			diagnostics: false
		}
	},

	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
		'^@/(.*)$': '<rootDir>/src/$1'
	},

	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
