import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PostItem = ({ post, user, showActions, deletePost }) => {
  const onDeleteClick = (id) => {
    axios.delete(`/api/posts/${id}`).then(() => window);
    deletePost(id);
  };

  const deleteButton = (
    <button
      onClick={() => onDeleteClick(post.id)}
      type="button"
      className="btn btn-danger mr-1"
    >
      <i className="fas fa-times" />
    </button>
  );

  const avatar = <p className="text-center">{post.title}</p>;

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-2">{avatar}</div>
        <div className="col-md-10">
          <p className="lead">{post.content}</p>
          {showActions && <span>{deleteButton}</span>}
        </div>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
};

export default PostItem;
