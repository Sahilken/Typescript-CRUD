import express from "express";
import { PostController } from "../Controllers/post.controller";

export const router = express.Router();

// add post
router.post('/',PostController.addpost)


//get all posts from server
router.get('/',PostController.getPosts)

//get a single post using id
router.get('/:id',PostController.getAPost)

//update a post
router.put('/:id',PostController.updatePost)

//delete a post
router.delete('/:id',PostController.deletePost)


router.get('/axios/api',PostController.getFromOther)

router.post('/axios/apipost',PostController.getFromOther)

