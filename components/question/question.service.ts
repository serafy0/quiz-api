import Question from "./question.model"
import QuestionDAO from "./question.interface"

export async function addQuestion(question: QuestionDAO) {
    return await Question.query().insert(question)
}
