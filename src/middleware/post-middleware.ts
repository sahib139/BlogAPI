import { Request, Response, NextFunction } from 'express';

const validatePostData = (req: Request, res: Response, next: NextFunction) => {
    const { title, content } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({
            msg: "Invalid title",
            err: "Title is required and must be a string",
            data: '',
        });
    }

    if (!content || typeof content !== 'string') {
        return res.status(400).json({
            msg: "Invalid content",
            err: "Content is required and must be a string",
            data: '',
        });
    }
    next();
};

export { validatePostData };
