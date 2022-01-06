import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import windiCSS from 'vite-plugin-windicss';

export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(new URL('.', import.meta.url).pathname, './src'),
		},
	},
	plugins: [vue(), windiCSS()],
});
