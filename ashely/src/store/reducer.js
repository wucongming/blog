import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as subReducer } from '../pages/sub/store'
import { reducer as contentMenuReducer } from '../pages/menu/commons/contentMenu/store'

const reducer = combineReducers({
    home: homeReducer,
    sub: subReducer,
    contentMenu: contentMenuReducer
})

export default reducer;