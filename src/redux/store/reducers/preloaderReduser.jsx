import { types } from '../../type'

const initialState = {
	status: false,
}

export const preloaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ON_PRELOADER:
			return { ...state, status: true }
		case types.OFF_PRELOADER:
			return { ...state, status: false }

		default:
			return state
	}
}
