import { searchQuery } from "../utils/apiHelpers"
import NewsCard from "./NewsCard"

const NewsCardList = (prop) => {

  const renderCard = () => {
    return (
      prop.results.map(i => {
        return <NewsCard news={i} />
      })
    )
  }

  return (
    <div>
      {prop.results ? renderCard() : null}
    </div>
  )
}

export default NewsCardList