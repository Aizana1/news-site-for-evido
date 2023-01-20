import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import Comment from "../comment/Comment";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const store = useStore();
  const { commentsInfo } = store.getState();

  useEffect(() => {
    let timer;
    function getNewState() {
      return store.getState();
    }
    if (commentsInfo.isLoading) {
      timer = setTimeout(() => {
        let { commentsInfo } = getNewState();
        setComments(commentsInfo.comments);
      }, 1000);
    } else {
      setComments(commentsInfo.comments);
    }
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <div className="comments">
      <h2>
        Comments
        {commentsInfo.isLoading
          ? " are loading ..."
          : commentsInfo.isError
          ? " are failed to load"
          : ""}
      </h2>
      {comments.map((comment) => (
        <Comment key={comment.id + "_" + comment.newsId} comment={comment} />
      ))}
    </div>
  );
}
