/*
** extent webpack loaders config
*/

const lint_loader = {
	enforce: 'pre',
	test: /\.(js|vue)$/,
	loader: 'eslint-loader',
	exclude: /(node_modules)/
}

const mk_loader = {
	test: /\.md$/,
	loader: 'markdown-it-loader',
	exclude: /(node_modules)/
}

const json_loader = {
	test: /\.json$/,
	loader: 'json-loader',
	exclude: /(node_modules)/
}

module.exports = {lint_loader, mk_loader, json_loader}