import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import PostItem from "./PostItem";

const PostFeed = ({ posts }) => {
  return posts.map((post) => <PostItem key={post._id} post={post} />);
};

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
