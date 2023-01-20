import "./post.css";
import { IoIosEye } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as TYPES from "../../redux/actionTypes.js";

export default function Post({ item }) {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setDate(new Date(item.createdAt).toLocaleDateString());
  }, []);

  const getComments = (id) => {
    dispatch({
      type: TYPES.COMMENTS_LOADING,
    });
    axios
      .get(`https://63c652e7dcdc478e15bf1f66.mockapi.io/news/${id}/comments`)
      .then((res) =>
        dispatch({
          type: TYPES.COMMENTS_LOADED,
          payload: res.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: TYPES.COMMENTS_FAILED,
          payload: error,
        })
      );
  };

  const clickOnSingleHandler = (id) => {
    getComments(id);
    dispatch({
      type: TYPES.SHOW_SINGLE_POST,
      payload: id,
    });
    navigate(`/posts/${id}`);
  };
  return (
    <div className="post" onClick={() => clickOnSingleHandler(item.id)}>
      <img className="postImage" src={item.image} alt={item.name} />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postAuthor">{item.author}</span>
          <span className="postViewsIcon">
            <IoIosEye />
          </span>
          <span className="postViews">{item.views}</span>
        </div>
        <span className="postTitle">{item.name}</span>
        <hr />
        <span className="postTimestamp">{date}</span>
      </div>
      <p className="postText">{item.text}</p>
    </div>
  );
}
