import {combineReducers} from 'redux';
import * as AppReducer from './reducers';

const rootReducer = combineReducers({
	clickedCount : AppReducer.updateClickCount
});

export default rootReducer;