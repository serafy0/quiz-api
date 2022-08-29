import { Router } from "express"
const router = Router({ mergeParams: true })
import { createQuestion } from "./question.controller"

router.post("/:quiz_id", createQuestion)

export default router
