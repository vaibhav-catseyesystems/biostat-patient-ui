import {
    GET_LABS_REQUEST,
    GET_LABS_SUCCESS,
    GET_LABS_FAIL,
    GET_USER_PROFILE_FAIL
  } from "../utils/Constants";
  import apiClient from "../services/apiClient";
  import { toast } from "react-toastify";
import { LABS_INFO } from "../utils/URLs";
  
  export const getLabsList = (page=1) => async (dispatch) => {
    dispatch({ type: GET_LABS_REQUEST });
  
    try {
      const response = await apiClient.get(`${LABS_INFO}?page=${page}`);
  
      if (response.data.status =="success") {
        dispatch({ type: GET_LABS_SUCCESS, payload: {
            labList: response.data.content,
            pagination: response.data.pagination,
        } });
      } else {
        dispatch({ type: GET_LABS_FAIL, payload: response.data.error });
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch({
        type: GET_LABS_FAIL,
        payload: error.response ? error.response.data.message : "Failed to load medications",
      });
      toast.error(error.response ? error.response.data.message : "Failed to load medications");
    }
  };
  