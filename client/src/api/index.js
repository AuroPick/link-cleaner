import axios from "axios";

const url = "http://localhost:5000/links";

export const getNewLinks = () => axios.get(`${url}/get-links`);
