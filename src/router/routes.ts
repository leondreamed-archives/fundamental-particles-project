import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: async () => import('~/pages/menu-page.vue'),
	},
	{
		path: '/game',
		component: async () => import('~/pages/game-page.vue'),
	},
];
