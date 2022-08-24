import { Response, Request, NextFunction } from "express"
import ApiError from "../../middleware/errorHandling/ApiError"
import { addQuiz, editQuiz, getOneQuiz } from "./quiz.service"
import { validateId } from "./quiz.validation"
async function createQuiz(req: Request, res: Response, next: NextFunction) {
    try {
        const { title, picture } = req.body
        const newQuiz = await addQuiz(title, picture)
        return res.status(200).json({ quiz: newQuiz })
    } catch (err) {
        next(err)
    }
}

async function updateQuiz(req: Request, res: Response, next: NextFunction) {
    try {
        const { title, picture } = req.body
        const { id } = req.params
        const valid = validateId(req.params)
        if (!valid) {
            if (!req.params.id) {
                throw new ApiError(400, "an id is required")
            }
            throw new ApiError(400, "id invalid")
        }
        const quiz = await getOneQuiz(id)
        if (!quiz) {
            throw new ApiError(404, "Not found")
        }
        const updatedQuiz = await editQuiz(id, title, picture)
        return res.status(200).json({ quiz: updatedQuiz })
    } catch (err) {
        next(err)
    }
}

async function getQuiz(req: Request, res: Response, next: NextFunction) {
    try {
        const valid = validateId(req.params)
        const { id } = req.params
        if (!valid) {
            if (!req.params.id) {
                throw new ApiError(400, "an id is required")
            }
            throw new ApiError(400, "id invalid")
        }

        const quiz = await getOneQuiz(id)
        if (!quiz) {
            throw new ApiError(404, "Not found")
        }

        return res.status(200).json({ quiz })
    } catch (err) {
        next(err)
    }
}

export { createQuiz, updateQuiz, getQuiz }
