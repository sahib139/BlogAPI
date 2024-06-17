import express, { Router } from "express";
const router : Router = express.Router()

router.get('/posts/:id');
router.post('/posts');
router.put('/posts');
router.delete('/posts');
router.get('/posts');

export = {router};