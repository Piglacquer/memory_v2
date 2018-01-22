module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///3000'
	},
	production: {
		client: 'pg',
		connection:
			process.env.DATABASE_URL ||
			'postgres://aeikheoqbfnvau:4561f6806195fe38fa4e5f15332be97c859ec25b614922aceff034d714b9a268@ec2-54-235-252-137.compute-1.amazonaws.com:5432/ddssf6u3pcekma'
	}
}
