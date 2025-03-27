import { toast } from "react-toastify";
import apiClient from "../services/apiClient";
import { GET_DIET_PLANS_FAIL, GET_DIET_PLANS_REQUEST, GET_DIET_PLANS_SUCCESS, GET_USER_PROFILE_FAIL } from "../utils/Constants";
import { DIET_PLANS } from "../utils/URLs";

export const getDietPlanList = (page=1) => async (dispatch) => {
    dispatch({type:GET_DIET_PLANS_REQUEST})
    try {
        const response = await apiClient.post(`${DIET_PLANS}?page=${page}&limit=10`);
        if (response.data.status_code === 200) {
          dispatch({ type: GET_DIET_PLANS_SUCCESS, payload: {
            dietPlans: response.data.content,
            pagination: response.data.pagination,
        },});
          console.log(response.data);
        } else {
          dispatch({ type: GET_DIET_PLANS_FAIL, payload: response.data.error });
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch({
          type: GET_DIET_PLANS_FAIL,
          payload: error.response ? error.response.data.message : "Failed to load plans",
        });
        toast.error(error.response ? error.response.data.message : "Failed to load plans");
      }

}