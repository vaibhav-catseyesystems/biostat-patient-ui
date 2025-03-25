import { GET_USER_PROFILE_FAIL, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../utils/Constants' 

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case REGISTER_USER_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default: return {
            state
        }
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                currentUser: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PROFILE_REQUEST:
            return {
                loading: true
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                userProfile: action.payload
            }
        case GET_USER_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

