import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { userLoginReducer, userProfileReducer, userRegisterReducer } from '../reducers/userReducers';
import { dietPlansReducer } from '../reducers/dietReducers';
import { medicationReducer } from '../reducers/medicationReducers';
import { labReducer } from '../reducers/labReducers';

const rootReducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userProfileReducer,
    dietPlansReducer,
    medicationReducer,
    labReducer
})

const middleware = [thunk];


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    userLoginReducer:{
        currentUser:currentUser
    },
};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);
export default store;