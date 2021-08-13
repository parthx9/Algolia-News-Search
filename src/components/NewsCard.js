const NewsCard = (prop) => {
  return (
    <div className="news-card">
      <h3 dangerouslySetInnerHTML={{ __html: prop.news._highlightResult.title.value }}></h3>
    </div>
  )
}

export default NewsCard