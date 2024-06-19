import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload; 
        }
    }
}

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            msg: "Access Denied",
            err: "No token provided",
            data: '',
        });
    }

    try {
        const secret:string|undefined = process.env.JWT_SECRET ;
        const decoded:JwtPayload|string = jwt.verify(token, secret!) ;
        req.user = decoded as JwtPayload;
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Invalid Token",
            err: error,
            data: '',
        });
    }
};

export {authenticateJWT};
