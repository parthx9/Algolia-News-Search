import CommentList from "./CommentList"

const Comment = (prop) => {
  return (
    <div>
      <div className="mb-2 comment">
        <h5 dangerouslySetInnerHTML={{ __html: prop.comment.text }}></h5>
        <span className="subtext">{prop.comment.children.length} replies</span>
      </div>
      {(prop.comment.children.length > 0) ? (
        <CommentList CommentList={prop.comment.children} />
      ) : null}
    </div>
  )
}

export default Comment