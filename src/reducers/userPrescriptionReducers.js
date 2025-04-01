import { GET_USER_PRESCRIPTIONS_FAIL, GET_USER_PRESCRIPTIONS_REQUEST, GET_USER_PRESCRIPTIONS_SUCCESS } from "../utils/Constants";

const prescriptionsInitialState = {
  prescriptionList: [],
  loading: false,
  error: null,
  pagination: { page: 1, totalPages: 1 },
}

export const userPrescriptionReducer = (state = prescriptionsInitialState, action) => {
  switch (action.type) {
    case GET_USER_PRESCRIPTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_USER_PRESCRIPTIONS_SUCCESS:
      return {
        ...state,
        prescriptionList: action.payload.prescriptionList,
        pagination: action.payload.pagination,
        loading: false,
        error: null,
      };
    case GET_USER_PRESCRIPTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
