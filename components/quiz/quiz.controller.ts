import { Response, Request, NextFunction } from "express"

import { addQuiz } from "./quiz.service"
export async function createQuiz(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { title, picture } = req.body
        const newQuiz = await addQuiz(title, picture)

        return res.status(200).json({ quiz: newQuiz })
    } catch (err) {
        next(err)
    }
}
