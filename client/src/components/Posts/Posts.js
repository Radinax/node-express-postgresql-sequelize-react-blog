import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// Components
import Comment from "../Comment";
import Loader from "../Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  // Handles Post
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      userId: 1,
    };
    axios.post("/api/posts", { ...newPost }).then(() => {
      setPosts([...posts, newPost]);
    });
    setContent("");
  };
  console.log(posts);

  // Get All Posts
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/posts")
      .then((res) => {
        setLoading(false);
        setPosts(res.data.posts);
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err);
      });
  }, []);

  // Delete posts
  const onDeleteClick = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        const filteredPost = posts.filter((post) => post.id !== id);
        setPosts(filteredPost);
      })
      .catch((err) => console.log(err));
  };

  if (loading || posts === null) return <Loader />;
  if (errors !== null) return <div>There was an error</div>;

  // Individual Post
  const postItem = (post) => {
    // Delete Button
    const deleteButton = (
      <button
        onClick={() => onDeleteClick(post.id)}
        type="button"
        className="btn btn-danger mr-1"
      >
        <i className="fas fa-times" />
      </button>
    );

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">{post.title}</p>
            <p className="lead">{post.content}</p>
            {<span>{deleteButton}</span>}
          </div>
        </div>
      </div>
    );
  };

  const postContent = posts && posts.map((post) => postItem(post));

  const postForm = (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Say Something...</div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                placeholder="Add a title"
                className="form-control form-control-lg mb-2"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Comment
                placeholder="Create a post"
                name="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                error={errors && errors.text}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {postForm}
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
