import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import { types } from '../type'

export const changeTextAction = () => {
	return {
		type: types.CHANGE_TEXT,
	}
}

export const clearTextAction = () => {
	return {
		type: types.CLEAR_TEXT,
	}
}

export const handleTextAction = () => {
	return function (dispatch) {
		dispatch(changeTextAction())
		setTimeout(() => {
			dispatch(clearTextAction)
		}, 3000)
	}
}
export const usersAction = users => {
	return {
		type: types.USERS,
		payload: users,
	}
}

export const OnPreloaderAction = () => {
	return {
		type: types.ON_PRELOADER,
	}
}
export const OffPreloaderAction = () => {
	return {
		type: types.OFF_PRELOADER,
	}
}

export const getUsersAction = () => {
	return async function (dispatch) {
		dispatch(OnPreloaderAction())
		const res = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await res.json()
		dispatch(usersAction(data))
		dispatch(OffPreloaderAction())
	}
}

export const PostUsersAction = ()=>{
	const options = {
		method:'POST',
		headers:{
			"Content-Type":"application-json"
		},
		body:JSON.stringify(data)
	}
	const ress = await fetch('https://jsonplaceholder.typicode.com/users',options)
		const data = await ress.json()
		dispatch(usersAction(data))
}
