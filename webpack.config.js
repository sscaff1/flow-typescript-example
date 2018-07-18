const commonBabelOptions = ['@babel/preset-env'];

const flowBabelOptions = {
	presets: [...commonBabelOptions, '@babel/preset-flow']
};

const typeScriptBabelOptions = {
	presets: commonBabelOptions
};

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		typescript: './src/typescript/app.ts',
		flow: './src/flow/app.js'
	},
	output: {
		filename: '[name].js'
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: typeScriptBabelOptions
					},
					'ts-loader'
				]
			},
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: flowBabelOptions
					}
				]
			}
		]
	}
};
