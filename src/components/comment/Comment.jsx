import { useState, useEffect } from "react";
import "./comment.css";

export default function Comment({ comment }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date(comment.createdAt).toLocaleString());
  }, []);
  
  return (
    <div className="comment-box">
      <div className="list">
        <div className="user">
          <div className="user-avatar">
            <img src={comment.avatar} alt="" />
          </div>
          <div className="user-meta">
            <div className="user-name">{comment.author}</div>
            <div className="user-timestamp">{date}</div>
          </div>
        </div>
        <div className="comment-text">{comment.text}</div>
      </div>
    </div>
  );
}
