import { Router } from "express"
import { createQuiz, updateQuiz, getQuiz, deleteQuiz } from "./quiz.controller"
const router = Router()

router.post("/", createQuiz)
router.patch("/:id", updateQuiz)
router.get("/:id", getQuiz)
router.delete("/:id", deleteQuiz)

export default router
