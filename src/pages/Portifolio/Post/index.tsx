import { IPost } from "../..";
import { relativeDataFormatter } from "../../../utils/formater";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost
}

export function Post({post}: PostProps) {
  const formattedDate = relativeDataFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong> {post.title} </strong>
        <span> {formattedDate}</span>
      </div>
      <p> {post.body}
      </p>
    </PostContainer>
  )
}
