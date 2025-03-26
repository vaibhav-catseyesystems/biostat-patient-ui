import { GET_DIET_PLANS_FAIL, GET_DIET_PLANS_REQUEST, GET_DIET_PLANS_SUCCESS } from "../utils/Constants"

const dietInitialState = {
    dietPlans: [],
    loading: false,
    error: null,
    pagination: { page: 1, totalPages: 1 },
}
export const dietPlansReducer = (state = dietInitialState, action) => {
    switch (action.type) {
        case GET_DIET_PLANS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DIET_PLANS_SUCCESS:
            return {
                ...state,
                dietPlans: action.payload.dietPlans,
                pagination: action.payload.pagination,
                loading: false,
                error: null,
            }
        case GET_DIET_PLANS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}