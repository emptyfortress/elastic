import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '@/components/SearchResults'
import Folder from '@/components/Folder'
import Doc from '@/components/Doc'
import Task from '@/components/Task'
import Help from '@/components/Help'
import Advanced from '@/components/Advanced'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/help/:id',
		name: 'help',
		component: Help,
		props: true,
	},
	{
		path: '/advanced',
		name: 'advanced',
		component: Advanced,
		props: true,
	},
	{
		path: '/results/:id',
		name: 'results',
		component: SearchResults,
		props: true,
	},
	{
		path: '/task',
		name: 'task',
		component: Task,
	},
	{
		path: '/doc',
		name: 'doc',
		component: Doc,
	},
	{
		path: '/folder',
		name: 'folder',
		component: Folder,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
