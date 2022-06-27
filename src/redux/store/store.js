import { combineReducers, createStore } from 'redux'
import { preloaderReducer } from './reducers/preloaderReduser'
import { titleReducer } from './reducers/tittleReducer'
import { usersReducer } from './reducers/usersReducer'

const rootReducer = combineReducers({
	title: titleReducer,
	user: usersReducer,
	preloader: preloaderReducer,
})

export const store = createStore(rootReducer)
