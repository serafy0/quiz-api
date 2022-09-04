import Question from "./question.model"

export async function addQuestion(question: any) {
    return await Question.query().insertGraphAndFetch(question)
}
