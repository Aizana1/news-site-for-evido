import { useSelector } from "react-redux";
import "./singlePost.css";

export default function SinglePost() {
  const post = useSelector((state) => state.post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.image} alt={post.name} className="singlePostImg" />
        <h1 className="singlePostTitle">{post.name}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.author}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.text}</p>
      </div>
    </div>
  );
}
