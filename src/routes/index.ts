import express, { Router } from "express";
const router : Router = express.Router()
import { PostRoutes} from "./post-routes";
import {UserRoutes} from './user-routes'

router.use(PostRoutes);
router.use(UserRoutes);

export {router as APIroutes};