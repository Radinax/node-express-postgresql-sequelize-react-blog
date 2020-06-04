import React, { useState } from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
// Components
import Comment from "../Comment";

const PostForm = ({ addPost, user, error }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      text,
      name: user.name,
      avatar: user.avatar,
    };
    addPost(newPost);
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Say Something...</div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <Comment
                placeholder="Create a post"
                name="text"
                value={text}
                onChange={onChange}
                error={error.text}
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
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default PostForm;
