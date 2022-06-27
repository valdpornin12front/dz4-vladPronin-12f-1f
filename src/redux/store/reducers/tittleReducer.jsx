import { types } from '../../type'

const initialState = {
	title: 'home place',
}
export const titleReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_TEXT:
			return { ...state, title: 'new title' }
		case types.CLEAR_TEXT:
			return {
				...state,
				title: '',
			}
		default:
			return state
	}
}
