import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Header from "../components/Header"
import { getDataFromID } from "../utils/apiHelpers"
import '../assets/css/NewsDetail.css'
import { convertDiffDates } from "../utils/helperFunctions"
import CommentList from "../components/CommentList"

const News = () => {

  const { newsID } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    getDataFromID(newsID)
      .then(res => {
        setData(res)
      })
  }, [])

  return (
    <div>
      <Header />
      {data ? (
        <div className='container'>
          <div className='news-details'>
            <div className="main-section">
              <div className="title">
                <div className="points">
                  <span className="fa fa-chevron-up"></span>
                  <span>{data.points}</span>
                </div>
                <h3>{data.title}</h3>
              </div>
              <p className='subtext mb-1'>Created by <span className="fw-bold">{data.author}</span>, <span className="fw-bold">{convertDiffDates(data.created_at)}</span></p>
              <div className="bottom-bar mb-3">
                <div className="item">
                  <span className="fa fa-comment"></span>
                  <span className="fw-bold">{data.children.length}</span>
                </div>
                <div className="item">
                  <span className="fa fa-link"></span>
                  <a href={data.url} target="_blank" rel="noreferrer" >View Source</a>
                </div>
              </div>
            </div>
            <div>
              {<CommentList CommentList={data.children} />}
            </div>
          </div>
        </div>
      ) : <div className="loading">
        <div className="spinner">
        </div>
        <h4 className="subtext">Retrieving data...</h4>
        <p className="subtext">Please wait, this might take a few seconds</p>
      </div>}
    </div>
  )
}

export default News