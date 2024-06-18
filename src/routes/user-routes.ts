import express, { Router } from "express";
const router : Router = express.Router()
import {signIn,signUp} from "../controllers/user-controllers";
import {validateSignInData,validateSignUpData} from "../middleware/user-middleware";

router.post('/signin',validateSignInData,signIn);
router.post('/signup',validateSignUpData,signUp);

export {router as UserRoutes};