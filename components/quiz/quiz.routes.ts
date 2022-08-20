import { Router } from "express"
import { createQuiz, updateQuiz } from "./quiz.controller"
const router = Router()

router.post("/", createQuiz)
router.patch("/:id", updateQuiz)

export default router
