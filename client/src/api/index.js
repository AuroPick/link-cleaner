import axios from "axios";

const url = "http://localhost:5000/links";

export const getLinks = () => axios.get(url);
