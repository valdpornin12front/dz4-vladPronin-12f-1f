import React from 'react'

export const UsersList = ({ users }) => (
	<ul>
		{users.map(user => (
			<li key={user.id}>{user.name}</li>
		))}
	</ul>
)
