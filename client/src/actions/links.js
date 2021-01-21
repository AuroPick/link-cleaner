import * as api from "../api";

export const getLinks = (pageNumber) => async (dispatch) => {
  try {
    const { data } = await api.getLinks(pageNumber);

    dispatch({ type: "GET_LINKS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getNewLinks = () => async (dispatch) => {
  try {
    const { data } = await api.getNewLinks();

    dispatch({ type: "GET_NEW_LINKS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postLink = (link) => async (dispatch) => {
  try {
    const { data } = await api.postLink(link);

    dispatch({ type: "POST_LINK", payload: data });
  } catch (error) {
    console.log(error);
  }
};
