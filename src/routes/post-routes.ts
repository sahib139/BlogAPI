import express, { Router } from "express";
const router : Router = express.Router()
import {getAllPost,getPost,updatePost,deletePost,createPost} from "../controllers/post-controller";
import {validatePostData,} from "../middleware/post-middleware";
import {authenticate} from "../middleware/authenticate-middleware";

router.get('/posts/:id',authenticate,getPost);
router.post('/posts',authenticate,validatePostData,createPost);
router.put('/posts/:id',authenticate,updatePost);
router.delete('/posts/:id',authenticate,deletePost);
router.get('/posts',authenticate,getAllPost);

export {router as PostRoutes};