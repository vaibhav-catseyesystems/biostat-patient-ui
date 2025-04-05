import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { GET_MEMBER_FAIL, GET_MEMBER_REQUEST, GET_MEMBER_SUCCESS, GET_USER_PROFILE_FAIL } from "../utils/Constants";
import { MEMBER_INFO } from "../utils/URLs";

export const getMember= (members) => async (dispatch) => {
    console.log("Submitting member:", members);
    dispatch({type:GET_MEMBER_REQUEST})
    try {
        const response = await apiClient.post(`${MEMBER_INFO}`,members);

        if (response.data.status_code === 200) {
          dispatch({ type: GET_MEMBER_SUCCESS, payload: {
            members: response.data.content,
        },});
          console.log(response.data);
        } else {
          dispatch({ type: GET_MEMBER_FAIL, payload: response.data.error });
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch({
          type: GET_MEMBER_FAIL,
          payload: error.response ? error.response.data.message : "Failed to load member",
        });
        toast.error(error.response ? error.response.data.message : "Failed to load member");
      }

}