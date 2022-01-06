const createAliases = require('@leonzalion/eslint-config/alias');

module.exports = {
	extends: ['@leonzalion/eslint-config'],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		extraFileExtensions: ['.vue'],
	},
	settings: createAliases({ '~': './src', '~test': './test' }),
};
