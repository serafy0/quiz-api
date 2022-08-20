import Quiz from "./quiz.model"

export async function addQuiz(title: string, picture: string) {
    return await Quiz.query().insert({ title, picture }).returning("*").first()
}
