import { useHistory } from "react-router"
import { convertDiffDates } from "../utils/helperFunctions"

const NewsCard = (prop) => {

  const history = useHistory()

  const getTitle = () => {
    if (prop.news.story_title && prop.news._highlightResult.title?.value) {
      return prop.news.title
    }
    return (prop.news._highlightResult.title?.value) ? (prop.news._highlightResult.title?.value) : (
      prop.news.story_title
    )
  }

  if (prop.news.story_title && prop.news._highlightResult.title?.value && prop.news.title) {
    return
  }

  return (
    <div onClick={() => history.push('/news/' + prop.news.objectID)} className='row news-card'>
      <div className='col-1'>
        <div className='points'>
          <span className="fa fa-chevron-up"></span>
          {prop.news.points ? prop.news.points : 0}
        </div>
      </div>
      <div className='col-11'>
        <div className="news-info">
          <h3 dangerouslySetInnerHTML={{ __html: getTitle() }}></h3>
          <p className="subtext m-0">created by {prop.news.author}, {convertDiffDates(prop.news.created_at)}</p>
        </div>
        <div className='bottom-bar'>
          <div className="item">
            <span className="far fa-comment"></span>
            <span>{prop.news.num_comments ? prop.news.num_comments : 0}</span>
          </div>
          <div className="item">
            <span className="fa fa-link"></span>
            <a href={prop.news.url ? prop.news.url : prop.news.story_url} target="_blank" rel="noreferrer" >View Source</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewsCard