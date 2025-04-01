
import { GET_MEDICATION_REQUEST, GET_MEDICATION_SUCCESS, GET_MEDICATION_FAIL } from "../utils/Constants";

const medicationInitialState = {
  medicationList: [],
  loading: false,
  error: null,
  pagination: { page: 1, totalPages: 1 },
}

export const medicationReducer = (state = medicationInitialState, action) => {
  switch (action.type) {
    case GET_MEDICATION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_MEDICATION_SUCCESS:
      return {
        ...state,
        medicationList: action.payload.medicationList,
        pagination: action.payload.pagination,
        loading: false,
        error: null,
      };
    case GET_MEDICATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
