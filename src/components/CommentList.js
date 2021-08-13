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
      <div className="row">
        <div className="col-1">
          <span className="fa fa-chevron-right me-3"></span>
        </div>
        <div className="col-11">
          {renderComments()}
        </div>
      </div>
    </div>
  )
}

export default CommentList