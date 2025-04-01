
import { GET_LABS_REQUEST, GET_LABS_SUCCESS, GET_LABS_FAIL } from "../utils/Constants";

const labInitialState = {
  labList: [],
  loading: false,
  error: null,
  pagination: { page: 1, totalPages: 1 },
}

export const labReducer = (state = labInitialState, action) => {
  switch (action.type) {
    case GET_LABS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_LABS_SUCCESS:
      return {
        ...state,
        labList: action.payload.labList,
        pagination: action.payload.pagination,
        loading: false,
        error: null,
      };
    case GET_LABS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
