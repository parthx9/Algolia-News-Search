import Header from "../components/Header"
import nothing from "../assets/imgs/nothing.svg"
import { useEffect, useState } from "react"
import { searchQuery } from "../utils/apiHelpers"
import NewsCardList from "../components/NewsCardList"

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    searchQuery('test')
      .then(res => setSearchResults(res.hits))
  }, [])

  return (
    <div>
      <Header />
      <div className='home'>
        <div className='container'>
          <div className='search-area'>
            <div className='search-bar'>
              <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Algolia...' />
            </div>
            <div className='search-btn'>
              <button>
                Search
              </button>
            </div>
          </div>
          <div className='results-area'>
            <NewsCardList results={searchResults} />
            {/* <img className="nothing-img" src={nothing} alt="nothing-found" />
            <h3 className="subtext mt-3">No results found, please try searching something else.</h3> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home