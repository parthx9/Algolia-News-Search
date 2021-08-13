import Header from "../components/Header"
import nothing from "../assets/imgs/nothing.svg"
import { useEffect, useState } from "react"
import { searchQuery } from "../utils/apiHelpers"
import NewsCardList from "../components/NewsCardList"

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [status, setStatus] = useState('loaded')

  const renderTry = () => {

    const samples = ['India', 'Bitcoin', 'Tesla']

    return samples.map(i => {
      return (
        <span onClick={() => setSearchTerm(i)} className='query'>{i}</span>
      )
    })
  }

  const getResults = () => {
    setStatus('loading')
    searchQuery(searchTerm)
      .then(res => {
        if (res.hits.length === 0) {
          setStatus('no-results')
          setSearchResults([])
        }
        setSearchResults(res.hits)
        setStatus('none')
      })
      .catch(err => {
        setStatus('no-results')
      })
  }

  const checkStatus = () => {
    if (status === 'loaded') {
      return (
        <div className="search-something">
          <span className="fa subtext fa-search"></span>
          <h4 className="subtext">Your search results will appear here.</h4>
        </div>
      )
    }

    if (status === 'loading') {
      return (
        <div className="loading">
          <div className='spinner'>
          </div>
          <h4 className="subtext">Loading your results...</h4>
        </div>
      )
    }

    if (status === 'no-results') {
      return (
        <div>
          <img className="nothing-img" src={nothing} />
          <p className="subtext">Nothing Found</p>
        </div>
      )
    }

    return (
      <NewsCardList results={searchResults} />
    )
  }

  return (
    <div>
      <Header />
      <div className='home'>
        <div className='container'>
          <div className='search-area'>
            <div className='search-bar'>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Algolia...' />
            </div>
            <div onClick={() => getResults()} className='search-btn'>
              <button>
                Search
              </button>
            </div>
          </div>
          <div className="try-area">
            <div className='try-queries'>
              <span className="pe-3">Try these: </span> {renderTry()}
            </div>
          </div>
          <div className='results-area'>
            {checkStatus()}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home