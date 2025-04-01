import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { GET_USER_PRESCRIPTIONS_FAIL, GET_USER_PRESCRIPTIONS_REQUEST, GET_USER_PRESCRIPTIONS_SUCCESS } from "../utils/Constants";
import { PATIENT_PRESCRIPTION } from "../utils/URLs";

export const getUserPrescriptions = (page = 1,user_id) => async (dispatch) => {
    dispatch({ type: GET_USER_PRESCRIPTIONS_REQUEST });

    try {
        const response = await apiClient.post(`${PATIENT_PRESCRIPTION}${user_id}?page=${page}&limit=10`);

        if (response.data.status_code === 200) {
            dispatch({
                type: GET_USER_PRESCRIPTIONS_SUCCESS, payload: {
                    prescriptionList: response.data.content,
                    pagination: response.data.pagination,
                }
            });
        }
    } catch (error) {
        dispatch({
            type: GET_USER_PRESCRIPTIONS_FAIL,
            payload: error.response ? error.response.data.message : "Failed to load prescriptions",
        });
        toast.error(error.response ? error.response.data.message : "Failed to load prescriptions");
    }
};