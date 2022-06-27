import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersList } from '../components/UsersList/UsersList'
import { getUsersAction } from '../redux/store/action'

function UserPage() {
	const users = useSelector(user => user.user.users)
	const dispatch = useDispatch()
	const preloader = useSelector(state => state.preloader.status)

	return (
		<div>
			<h1>User Page</h1>
			<button onClick={() => dispatch(getUsersAction)}>get user</button>
			------------------
			{!preloader ? 'loading...' : <UsersList users={users} />}
		</div>
	)
}

export default UserPage
