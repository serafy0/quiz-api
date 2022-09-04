import { Response, Request, NextFunction } from "express"
import ApiError from "../../middleware/errorHandling/ApiError"
import { getOneQuiz } from "../quiz/quiz.service"
import { validateId } from "../quiz/quiz.validation"
import QuestionDAO from "./question.interface"
import { addQuestion } from "./question.service"

async function createQuestion(req: Request, res: Response, next: NextFunction) {
    try {
        const questionBody: QuestionDAO = req.body
        const quiz_id: string = req.params.quiz_id
        const valid = validateId({ id: quiz_id })
        if (!valid) {
            if (!req.params.quiz_id) {
                throw new ApiError(400, "an id is required")
            }
            throw new ApiError(400, "id invalid")
        }

        const quiz = await getOneQuiz(quiz_id)
        if (!quiz) {
            throw new ApiError(404, "quiz not found")
        }
        questionBody.quiz_id = quiz_id

        const newQuestion = await addQuestion(questionBody)
        res.status(200).json({ question: newQuestion })
    } catch (err) {
        next(err)
    }
}

export { createQuestion }
