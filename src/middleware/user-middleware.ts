import { Request, Response, NextFunction } from 'express';

const validateSignUpData = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({
            msg: "Invalid username",
            err: "Username is required and must be a string",
            data: '',
        });
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            msg: "Invalid email",
            err: "Email is required and must be a string",
            data: '',
        });
    }

    if (!password || typeof password !== 'string') {
        return res.status(400).json({
            msg: "Invalid password",
            err: "Password is required and must be a string",
            data: '',
        });
    }

    next();
};

const validateSignInData = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            msg: "Invalid email",
            err: "Email is required and must be a string",
            data: '',
        });
    }

    if (!password || typeof password !== 'string') {
        return res.status(400).json({
            msg: "Invalid password",
            err: "Password is required and must be a string",
            data: '',
        });
    }

    next();
};

export { validateSignUpData, validateSignInData };
