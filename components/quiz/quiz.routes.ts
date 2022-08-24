import { Router } from "express"
import { createQuiz, updateQuiz, getQuiz } from "./quiz.controller"
const router = Router()

router.post("/", createQuiz)
router.patch("/:id", updateQuiz)
router.get("/:id", getQuiz)

export default router
