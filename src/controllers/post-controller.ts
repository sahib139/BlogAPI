import { Request, Response } from 'express';
import PostService from "../services/post-service";
import {Post} from "../models/post";

const postService = new PostService();

const getPost = async (req: Request, res: Response) => {
    try {
        const postId : number = parseInt(req.params.id,10);
        const post : Post|undefined = await postService.getPostById(postId);
        return res.status(200).json({
            msg:"Post fetch successfully",
            err:'',
            data:post,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to fetch the post",
            err:error,
            data:'',
        });
    }
};

const getAllPost = async (req: Request, res: Response) => {
    try {
        const posts : Post[]|undefined = await postService.getAllPosts();
        return res.status(200).json({
            msg:"Posts fetch successfully",
            err:'',
            data:posts,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to fetch the posts",
            err:error,
            data:'',
        });
    }
};

const createPost = async (req: Request, res: Response) => {
    try {
        const post : Post|undefined = await postService.createPost(req.body.title,req.body.content,req.body.authorId);
        if(!post){
            throw new Error('post creation, failed');
        }
        return res.status(200).json({
            msg:"Post created successfully",
            err:'',
            data:post,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to create the post",
            err:error,
            data:'',
        });
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const postId : number = parseInt(req.params.id,10);
        const post : Post|undefined = await postService.updatePost(postId,req.body.title,req.body.content);
        if(!post){
            throw new Error('post update, failed');
        }
        return res.status(200).json({
            msg:"Post updated successfully",
            err:'',
            data:post,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to update the post",
            err:error,
            data:'',
        });
    }
};

const deletePost = async (req: Request, res: Response) => {
    try {
        const postId : number = parseInt(req.params.id,10);
        const post : boolean = await postService.deletePost(postId);
        return res.status(200).json({
            msg:"Post deleted successfully",
            err:'',
            data:post,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to delete the post",
            err:error,
            data:'',
        });
    }
};


export {
    getPost,
    getAllPost, 
    updatePost,
    deletePost,
    createPost
};
