import * as api from "../api";

export const getNewLinks = () => async (dispatch) => {
  try {
    const { data } = await api.getNewLinks();

    dispatch({ type: "GET_NEW_LINKS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
