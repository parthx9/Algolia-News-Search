import Comment from "./Comment"

const CommentList = (prop) => {

  // const [limits,]

  const renderComments = () => {
    return (
      prop.CommentList.map(i => {
        if (i.text) {
          return <Comment comment={i} />
        }
        else {
          return null
        }
      })
    )
  }

  return (
    <div className="comment-list">
      <div>
        <span className="fa fa-chevron-right me-3"></span>
      </div>
      <div>
        {renderComments()}
      </div>
    </div>
  )
}

export default CommentList