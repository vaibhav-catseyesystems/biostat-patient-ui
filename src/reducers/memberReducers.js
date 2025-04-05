import { GET_MEMBER_FAIL, GET_MEMBER_REQUEST, GET_MEMBER_SUCCESS } from "../utils/Constants"

const memberInitialState = {
    members: [],
    loading: false,
    error: null,
}
export const memberReducer = (state = memberInitialState, action) => {
    switch (action.type) {
        case GET_MEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MEMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case GET_MEMBER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}