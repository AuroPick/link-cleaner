import axios from "axios";

const url = "http://localhost:5000/links";

export const getLinks = (pageNumber) => axios.get(`${url}?page=${pageNumber}`);
export const getNewLinks = () => axios.get(`${url}/get-links`);
export const postLink = (link) => axios.post(url, link);
