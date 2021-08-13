import { axiosBase } from "../api"

const searchQuery = async (q) => {
  const response = await axiosBase.get('/search?query=' + q)

  console.log(response.data)
  return response.data
}

export {
  searchQuery
}