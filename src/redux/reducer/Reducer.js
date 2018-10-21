import {combineReducers} from 'redux';
import arrwordsReducer from './ArrwordsReducer';
import filterStatusReducer from './FilterStatusReducer';
import isAddingReducer from './IsAddingReducer';
const reducer = combineReducers({
     arrwords:arrwordsReducer,
     filterStatus:filterStatusReducer,
     isAdding:isAddingReducer
});
export default reducer;
