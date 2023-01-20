import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as TYPES from "../../redux/actionTypes.js";
import axios from "axios";
import Post from "../post/Post";

import "./posts.css";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://63c652e7dcdc478e15bf1f66.mockapi.io/news"
      );
      const sortedRes = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      dispatch({
        type: TYPES.STORE_NEWS,
        payload: sortedRes
      });
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts">
      {posts.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
}
