import { Router } from "express"
import { createQuiz } from "./quiz.controller"
const router = Router()

router.post("/", createQuiz)

export default router
