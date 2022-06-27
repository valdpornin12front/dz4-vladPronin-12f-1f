import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function LocaleStagePage() {
	const [name, setName] = useState('')
	const [emaile, setEmail] = useState('')
	const dispatch = useDispatch()
	const handelUsers = () => {
		const data = {
			name: name,
			emaile: emaile,
		}
		dispatch(PostUsersAction(data))
	}

	return (
		<div>
			<input type='text' name='name' onChange={e => setName(e.target.value)} />
			<input
				type='text'
				name='email'
				onChange={e => setEmail(e.target.value)}
			/>
			<button onClick={handelUsers}>get users</button>
		</div>
	)
}

export default LocaleStagePage
