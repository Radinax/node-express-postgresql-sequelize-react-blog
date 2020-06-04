# PERN FULLSTACK APPLICATION

This is a project to perform a simple CRUD application using PostgreSQL, Express, React and Node.

## Project Folder

```bash
|── controllers
|   └── index.js
|── database
|   └── config
|       └── config.js
|── migrations
|   |── xxx-create-user.js
|   |── xxx-create-post.js
|   └── xxx-create-comment.js
|── models
|   |── comment.js
|   |── index.js
|   |── post.js
|   └── user.js
|── seeders
|   |── xxx-User.js
|   |── xxx-Post.js
|   └── xxx-Comment.js
|── routes
|   └── index.js
|── server
|   └── index.js
|── .env (add it to your gitignore)
|── .sequelizerc
└── index.js
```

## Endpoints

These are the endpoints for reference for CRUD operations on posts, we will add later the CRUDs for Users and Comments.

```bash
└── /api/posts                  [GET] [POST]
              /:post_id         [GET]
              /:post_id         [PUT]
              /:post_id         [DELETE]
```

## Conclusion

The hardest part was the setting up the database, but once you make it a step by step recipe it's much easier to deal with. So what comes next is then creating your routes, your express code and add your controllers specifying how the data will be handled.

**Made by Eng. Adrian Beria**
