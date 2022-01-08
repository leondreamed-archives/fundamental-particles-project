module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: { extend: {} },
	plugins: [require('tw-elements/dist/plugin')],
	shortcuts: {
		row: 'flex flex-row',
		column: 'flex flex-col',
		center: 'items-center justify-center',
	},
};
