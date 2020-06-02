const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

// @route  GET /api/posts
// @desc   Get all posts available
// @access Public
router.get("/posts", controllers.getAllPosts);

// @route  GET /api/posts/:post_id
// @desc   Get post by id
// @access Public
router.get("/posts/:postId", controllers.getPostById);

// @route  POST /api/posts
// @desc   Create a post from a user
// @access Public
router.post("/posts", controllers.createPost);

// @route  PUT /api/posts/:post_id
// @desc   Update post using the id
// @access Public
router.put("/posts/:postId", controllers.updatePost);

// @route  DELETE /api/posts/:post_id
// @desc   Delete post by id
// @access Public
router.delete("/posts/:postId", controllers.deletePost);

module.exports = router;
