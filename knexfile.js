module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/memory_v2'
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
}
