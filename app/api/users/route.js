export async function GET(request) {
	// Handle GET request for /api/users
	// Retrieve users from th edatabase or any data source

	const users = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Bob' },
	]

	//send the users as a response

	return new Response(JSON.stringify(users))
}
