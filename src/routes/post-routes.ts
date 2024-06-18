import express, { Router } from "express";
const router : Router = express.Router()
import {getAllPost,getPost,updatePost,deletePost,createPost} from "../controllers/post-controller";
import {validatePostData,} from "../middleware/post-middleware";

router.get('/posts/:id',getPost);
router.post('/posts',validatePostData,createPost);
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost);
router.get('/posts',getAllPost);

export = {router};