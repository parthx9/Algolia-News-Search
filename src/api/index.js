import axios from "axios";

const url = 'https://hn.algolia.com/api/v1'

export const axiosBase = axios.create({
  baseURL: url,
});
