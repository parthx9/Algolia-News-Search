import { axiosBase } from "../api"

const searchQuery = async (q) => {
  const response = await axiosBase.get('/search?query=' + q)
  console.log('all search data', response.data)
  return response.data
}

const getDataFromID = async (q) => {
  const response = await axiosBase.get('/items/' + q)
  console.log('object id ' + q + 'data', response.data)
  return response.data
}

export {
  searchQuery,
  getDataFromID
}