import ChoiceDAO from "../choice/choice.interface"

interface QuestionDAO {
    number: number
    picture: string
    points: number
    text: string
    explanation: string
    hint: string
    quiz_id: string
    choices: ChoiceDAO[]
}
export default QuestionDAO
