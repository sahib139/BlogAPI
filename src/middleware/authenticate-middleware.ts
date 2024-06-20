import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {OAuth2Client, TokenPayload } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | TokenPayload ; 
        }
    }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            msg: "Access Denied",
            err: "No token provided",
            data: '',
        });
    }

    const secret:string|undefined = process.env.JWT_SECRET ;
    jwt.verify(token, secret!,async (err,decoded)=>{
        if(err){
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: process.env.GOOGLE_CLIENT_ID,
                });
                const payload = ticket.getPayload();
                req.user = payload;
                next();
            } catch (error) {
                return res.status(400).json({
                    msg: "Invalid Token",
                    err: error,
                    data: '',
                });
            }
        }else{
            req.user = decoded as JwtPayload;
            next();
        }
    }) 
};

export {authenticate};
