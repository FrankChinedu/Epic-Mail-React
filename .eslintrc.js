module.exports = {
	root: true,
	extends: ['airbnb-base', 'plugin:react/recommended'],
	plugins: ['react'],
	env: {
		commonjs: true,
		node: true,
		mocha: true,
		browser: true,
		jest: true
	},
	rules: {
		'react/prop-types': 'off',
		'no-tabs': 'off',
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		indent: ['error', 2],
		'new-cap': 0,
		'consistent-return': 0,
		'no-unused-expressions': 0,
		'array-callback-return': 0,
		'no-console': 'off',
		'no-param-reassign': 0,
		'class-methods-use-this': 'off',
		'comma-dangle': 0,
		curly: ['error', 'multi-line'],
		'import/no-unresolved': [2, { commonjs: true }],
		'no-shadow': ['error', { allow: ['req', 'res', 'err'] }],
		'valid-jsdoc': [
			'error',
			{
				requireReturn: true,
				requireReturnType: true,
				requireParamDescription: false,
				requireReturnDescription: true
			}
		],
		'require-jsdoc': [
			'error',
			{
				require: {
					FunctionDeclaration: false,
					MethodDefinition: false,
					ClassDeclaration: false,
					ArrowFunctionExpression: false,
					FunctionExpression: false
				}
			}
		]
	}
};
