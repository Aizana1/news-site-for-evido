import Comments from "../../components/comments/Comments";
import Header from "../../components/header/Header";
import SinglePost from "../../components/singlePost/SinglePost";

import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <Header />
      <SinglePost />
      <Comments />
    </div>
  );
}
