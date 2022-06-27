import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTextAction } from '../redux/store/action'

function MainPage() {
	const title = useSelector(state => state.title.title)

	const dispatch = useDispatch()

	const hadndleTitle = () => {
		dispatch(handleTextAction())
	}

	return (
		<div>
			<h1>{title}</h1>
			<button onClick={hadndleTitle}>change text</button>
		</div>
	)
}

export default MainPage
