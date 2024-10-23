import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'https://sw-api.starnavi.io',
	headers: {
		'Content-Type': 'application/json'
	}
})

export default apiClient
