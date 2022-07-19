module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier',
	],
	rules: {
		'tsdoc/syntax': 'warn',
	},
};
