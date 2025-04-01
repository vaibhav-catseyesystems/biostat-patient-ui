import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { ADD_USER_MED_RECORD_FAIL, ADD_USER_MED_RECORD_REQUEST, ADD_USER_MED_RECORD_SUCCESS, GET_USER_MED_RECORDS_FAIL, GET_USER_MED_RECORDS_REQUEST, GET_USER_MED_RECORDS_SUCCESS } from "../utils/Constants";
import { MED_RECORDS, SYNC_MAIL } from "../utils/URLs";

export const getUserMedicalRecords = () => async (dispatch) => {
    dispatch({ type: GET_USER_MED_RECORDS_REQUEST })
    try {
        const response = await apiClient.post(`${MED_RECORDS}/124`);
        if (response.data.status_code === 200) {
            dispatch({
                type: GET_USER_MED_RECORDS_SUCCESS, payload: {
                    medicalRecords: response.data.content,
                    pagination: response.data.pagination,
                },
            });
            console.log(response.data);
        } else {
            dispatch({ type: GET_USER_MED_RECORDS_FAIL, payload: response.data.error });
            toast.error(response.data.message);
        }
    } catch (error) {
        dispatch({
            type: GET_USER_MED_RECORDS_FAIL,
            payload: error.response ? error.response.data.message : "Failed to load plans",
        });
        toast.error(error.response ? error.response.data.message : "Failed to load plans");
    }
}

export const addUserMedicalRecord = (data) => async (dispatch) => {
    dispatch({ type: ADD_USER_MED_RECORD_REQUEST })
    try {
        const response = await apiClient.post(`${MED_RECORDS}`,data,{
            headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.data.status_code === 200) {
            dispatch({type: ADD_USER_MED_RECORD_SUCCESS, payload:response.data.content});
            console.log(response.data);
        } else {
            dispatch({ type: ADD_USER_MED_RECORD_FAIL, payload: response.data.error });
            toast.error(response.data.message);
        }
    } catch (error) {
        dispatch({
            type: ADD_USER_MED_RECORD_FAIL,
            payload: error.response ? error.response.data.message : "Failed to load plans",
        });
        toast.error(error.response ? error.response.data.message : "Failed to load plans");
    }

}

export const fetchRecordsFromGmail = async () => {
    try {
        const response = await apiClient.get(`${SYNC_MAIL}?user_id=123`);
        console.log(response.data);
        window.location.href = response.data.content.auth_url;
    } catch (error) {
        console.log(error);
        toast.error(error.response ? error.response.data.message : "Error while fetching gmail");
    }

}