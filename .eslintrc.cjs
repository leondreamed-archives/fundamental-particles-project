const createAliases = require('@leonzalion/eslint-config/alias');

module.exports = {
	extends: ['@leonzalion/eslint-config'],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		extraFileExtensions: ['.vue'],
	},
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/no-unassigned-import': 'off',
	},
	settings: createAliases({ '~': './src', '~test': './test' }),
};
