import express, { Router } from "express";
const router : Router = express.Router()
import {signIn,signUp} from "../controllers/user-controllers";
import {validateSignInData,validateSignUpData} from "../middleware/user-middleware";
import {getGoogleAuthURL,googleAuthCallback} from "../config/oauth-config";


router.get('/auth/google',(req, res) => {
    res.redirect(getGoogleAuthURL());
});

router.get('/auth/google/callback',async (req,res)=>{
    const response = await googleAuthCallback(req);
    return res.status(200).json({response});
});

router.post('/signin',validateSignInData,signIn);
router.post('/signup',validateSignUpData,signUp);

export {router as UserRoutes};