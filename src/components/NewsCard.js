import { convertDiffDates } from "../utils/helperFunctions"

const NewsCard = (prop) => {
  return (
    <div className='row news-card'>
      <div className='col-1'>
        <div className='points'>
          <span className="fa fa-chevron-up"></span>
          {prop.news.points}
        </div>
      </div>
      <div className='col-11'>
        <div className="news-info">
          <h3 dangerouslySetInnerHTML={{ __html: prop.news._highlightResult.title.value }}></h3>
          <p className="subtext m-0">created by {prop.news.author}, {convertDiffDates(prop.news.created_at)}</p>
        </div>
        <div className='bottom-bar'>
          <div className="item">
            <span className="far fa-comment"></span>
            <span>{prop.news.num_comments}</span>
          </div>
          <div className="item">
            <span className="fa fa-link"></span>
            <a href={prop.news.url} target="_blank" rel="noreferrer" >View Source</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewsCard