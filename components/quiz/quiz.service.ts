import Quiz from "./quiz.model"

export async function addQuiz(title: string, picture: string) {
    return await Quiz.query().insert({ title, picture }).returning("*").first()
}

export async function editQuiz(id: string, title: string, picture: string) {
    return await Quiz.query().patchAndFetchById(id, { title, picture })
}

export async function getOneQuiz(id: string) {
    return await Quiz.query().findById(id)
}

export async function removeQuiz(id: string) {
    return await Quiz.query().deleteById(id)
}
