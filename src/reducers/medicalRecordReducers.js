import { ADD_USER_MED_RECORD_FAIL, ADD_USER_MED_RECORD_REQUEST, ADD_USER_MED_RECORD_SUCCESS, GET_USER_MED_RECORDS_FAIL, GET_USER_MED_RECORDS_REQUEST, GET_USER_MED_RECORDS_SUCCESS } from "../utils/Constants"

const medRecordsInitialState = {
    medicalRecords: [],
    loading: false,
    error: null,
    pagination: { page: 1, totalPages: 1 },
}

export const medicalRecordsReducer = (state = medRecordsInitialState, action) => {
    switch (action.type) {
        case GET_USER_MED_RECORDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USER_MED_RECORDS_SUCCESS:
            return {
                ...state,
                medicalRecords: action.payload.medicalRecords,
                pagination: action.payload.pagination,
                loading: false,
                error: null,
            }
        case GET_USER_MED_RECORDS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_USER_MED_RECORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_USER_MED_RECORD_SUCCESS:
            return {
                ...state,
                loading: false,
                medicalRecords: [...state.medicalRecords, action.payload],
            }
        case ADD_USER_MED_RECORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}