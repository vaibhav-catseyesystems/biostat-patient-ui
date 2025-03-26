import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { userLoginReducer, userProfileReducer, userRegisterReducer } from '../reducers/userReducers';
import { dietPlansReducer } from '../reducers/dietReducers';

const rootReducer = combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userProfileReducer,
    dietPlansReducer
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