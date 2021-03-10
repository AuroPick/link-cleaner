import axios from "axios";

const url = "https://link-cleaner.herokuapp.com/links";

export const getLinks = (pageNumber) => axios.get(`${url}?page=${pageNumber}`);
export const getNewLinks = () => axios.get(`${url}/get-links`);
export const postLink = (link) => axios.post(url, link);
