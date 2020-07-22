import { combineReducers } from 'redux';
import itemClickReducer from './itemClickReducer'
const appReducer = combineReducers({
  itemClick: itemClickReducer
})
export default appReducer;