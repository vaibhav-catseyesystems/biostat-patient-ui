import {
    GET_MEDICATION_REQUEST,
    GET_MEDICATION_SUCCESS,
    GET_MEDICATION_FAIL,
    GET_USER_PROFILE_FAIL
  } from "../utils/Constants";
  import apiClient from "../services/apiClient";
  import { toast } from "react-toastify";
import { MEDICATION_INFO } from "../utils/URLs";
  
  export const getMedicationsList = (page=1) => async (dispatch) => {
    dispatch({ type: GET_MEDICATION_REQUEST });
  
    try {
      const response = await apiClient.post(`${MEDICATION_INFO}?page=${page}&limit=10`);
  
      if (response.data.status_code === 200) {
        dispatch({ type: GET_MEDICATION_SUCCESS, payload: {
            medicationList: response.data.content,
            pagination: response.data.pagination,
        } });
      } else {
        dispatch({ type: GET_MEDICATION_FAIL, payload: response.data.error });
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch({
        type: GET_MEDICATION_FAIL,
        payload: error.response ? error.response.data.message : "Failed to load medications",
      });
      toast.error(error.response ? error.response.data.message : "Failed to load medications");
    }
  };
  