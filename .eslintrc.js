module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
		// '@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
		'indent': [ 'error', 'tab' ],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ]
	}
}
