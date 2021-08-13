const NewsCard = (prop) => {
  return (
    <div className="news-card">
      <p className="subtext m-0">created by {prop.news.author} at {prop.news.created_at}</p>
      <h3 dangerouslySetInnerHTML={{ __html: prop.news._highlightResult.title.value }}></h3>
    </div>
  )
}

export default NewsCard