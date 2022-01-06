import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
	attributify: {
		prefix: 'w:',
	},
	shortcuts: {
		row: 'flex flex-row',
		column: 'flex flex-column',
	},
});
