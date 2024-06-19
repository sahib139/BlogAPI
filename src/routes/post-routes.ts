import express, { Router } from "express";
const router : Router = express.Router()
import {getAllPost,getPost,updatePost,deletePost,createPost} from "../controllers/post-controller";
import {validatePostData,} from "../middleware/post-middleware";
import {authenticateJWT} from "../middleware/authenticate-middleware";

router.get('/posts/:id',authenticateJWT,getPost);
router.post('/posts',authenticateJWT,validatePostData,createPost);
router.put('/posts/:id',authenticateJWT,updatePost);
router.delete('/posts/:id',authenticateJWT,deletePost);
router.get('/posts',authenticateJWT,getAllPost);

export {router as PostRoutes};