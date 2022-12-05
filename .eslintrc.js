module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es2021: true,
	},
	extends: ["standard", "eslint-config-prettier"],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		// 'no-unused-vars': 'warn'
	},
}
