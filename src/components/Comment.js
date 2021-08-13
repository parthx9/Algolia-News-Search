import { convertDiffDates } from "../utils/helperFunctions"
import CommentList from "./CommentList"

const Comment = (prop) => {
  return (
    <>
      <div className="mb-2 comment">
        <h5 dangerouslySetInnerHTML={{ __html: prop.comment.text }}></h5>
        <span>Created <span className="fw-bold">{convertDiffDates(prop.comment.created_at)}</span> by <span className="fw-bold">{prop.comment.author}</span> </span>
        <div className="subtext">{prop.comment.children.length} replies</div>
      </div>
      {(prop.comment.children.length > 0) ? (
        <CommentList CommentList={prop.comment.children} />
      ) : null}
    </>
  )
}

export default Comment