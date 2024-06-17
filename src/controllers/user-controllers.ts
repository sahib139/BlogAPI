import { Request, Response } from 'express';
import UserService from "../services/user-service";
import {User} from "../models/user";

const userService = new UserService();

const signUp = async (req:Request,res:Response)=>{
    try {
        const user:User = await userService.signup(req.body.username,req.body.email,req.body.password);  
        return res.status(500).json({
            msg:"User created successfully",
            err:'',
            data:user,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to signUp",
            err:error,
            data:'',
        });
    }
};

const signIn = async (req:Request,res:Response)=>{
    try {
        const token:string = await userService.signin(req.body.email,req.body.password);  
        return res.status(500).json({
            msg:"User created successfully",
            err:'',
            data:token,
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Unable to signIn",
            err:error,
            data:'',
        });
    }
};