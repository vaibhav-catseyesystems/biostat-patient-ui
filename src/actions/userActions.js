import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { GET_USER_PROFILE_FAIL, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../utils/Constants";
import { PATIENT_INFO } from "../utils/URLs";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST })
  try {
    const response = await apiClient.post(`/v1/user/register`, user)
    if (response.status == 200) {
      dispatch({ type: REGISTER_USER_SUCCESS })
      toast.success("Registered, Please login to continue!!")
      setTimeout(() => {
        window.location.href = "/auth"
      }, 2500)
    }
  } catch (error) {
    dispatch({ type: REGISTER_USER_ERROR, payload: error })
    toast.error(error.response ? error.response.data.message : "Registration failed")
  }
}


export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const response = await apiClient.post("/v1/user/auth/login", user);

    if (response.status === 200) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      toast.success("User Logged in!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      dispatch({ type: USER_LOGIN_FAIL, payload: response.data.error });
      toast.error(response.data.message);
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response ? error.response.data.message : "Login failed",
    });
    toast.error(error.response ? error.response.data.message : "Login failed");
  }
};

export const loadUserProfile = (profileID) => async (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });
  try {
    const response = await apiClient.post(`${PATIENT_INFO}${profileID}`);
    if (response.data.status_code === 200) {
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: GET_USER_PROFILE_FAIL, payload: response.data.error });
      toast.error(response.data.message);
    }
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_FAIL,
      payload: error.response ? error.response.data.message : "Failed to load profile",
    });
    toast.error(error.response ? error.response.data.message : "Failed to load profile");
  }
};



