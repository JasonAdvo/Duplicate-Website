import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/views/HomePage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	// Add more routes here
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
