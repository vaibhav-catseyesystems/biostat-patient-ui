
import { GET_SYMPTOMS_REQUEST, GET_SYMPTOMS_SUCCESS, GET_SYMPTOMS_FAIL,GET_CAUSES_REQUEST, GET_CAUSES_SUCCESS, GET_CAUSES_FAIL,GET_DIET_REQUEST, GET_DIET_SUCCESS, GET_DIET_FAIL} from "../utils/Constants";

const dpInitialState = {
  symptomsList: [], 
  causesList:[],
  dietList:[],
  loading: false,
  error: null,
}

export const diseaseProfilesReducer = (state = dpInitialState, action) => {
  switch (action.type) {
    case GET_SYMPTOMS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_SYMPTOMS_SUCCESS:
      return {
        ...state,
        symptomsList: action.payload.symptomsList,
        loading: false,
        error: null,
      };
    case GET_SYMPTOMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case GET_CAUSES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CAUSES_SUCCESS:
      return {
        ...state,
        causesList: action.payload.causesList,
        loading: false,
        error: null,
      };
    case GET_CAUSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case GET_DIET_REQUEST:
        return {
          ...state,
          loading: true
        };
      case GET_DIET_SUCCESS:
        return {
          ...state,
          dietList: action.payload.dietList,
          loading: false,
          error: null,
        };
      case GET_DIET_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
    default:
      return state;
  }
};
