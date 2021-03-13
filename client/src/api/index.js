import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const getLinks = (pageNumber) => axios.get(`${url}?page=${pageNumber}`);
export const getNewLinks = () => axios.get(`${url}/get-links`);
export const postLink = (link) => axios.post(url, link);
