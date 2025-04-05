import {
  GET_SYMPTOMS_REQUEST, GET_SYMPTOMS_SUCCESS, GET_SYMPTOMS_FAIL,
  GET_CAUSES_REQUEST, GET_CAUSES_SUCCESS, GET_CAUSES_FAIL,
  GET_DIET_REQUEST, GET_DIET_SUCCESS, GET_DIET_FAIL
} from "../utils/Constants";
import apiClient from "../services/apiClient";
import { toast } from "react-toastify";
import { DISEASE_PROFILE } from "../utils/URLs";

export const getDiseaseProfile = () => async (dispatch) => {
  
  dispatch({ type: GET_SYMPTOMS_REQUEST });
  dispatch({ type: GET_CAUSES_REQUEST });
  dispatch({ type: GET_DIET_REQUEST });

  try {
    const response = await apiClient.post(`${DISEASE_PROFILE}`);

    if (response.data.status === "success") {
      const { content } = response.data;
      dispatch({ type: GET_SYMPTOMS_SUCCESS, payload: { symptomsList: content } });
      dispatch({ type: GET_CAUSES_SUCCESS, payload: { causesList: content } });
      dispatch({ type: GET_DIET_SUCCESS, payload: { dietList: content } });
    } else {
      dispatch({ type: GET_SYMPTOMS_FAIL, payload: response.data.error });
      dispatch({ type: GET_CAUSES_FAIL, payload: response.data.error });
      dispatch({ type: GET_DIET_FAIL, payload: response.data.error });

      toast.error(response.data.message);
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "Failed to load data";

    dispatch({ type: GET_SYMPTOMS_FAIL, payload: errorMessage });
    dispatch({ type: GET_CAUSES_FAIL, payload: errorMessage });
    dispatch({ type: GET_DIET_FAIL, payload: errorMessage });

    toast.error(errorMessage);
  }
};
