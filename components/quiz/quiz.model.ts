import BaseModel from "../../db/base.model"

class Quiz extends BaseModel {
    static get tableName() {
        return "quizzes"
    }

    static get idColumn() {
        return "id"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title"],

            properties: {
                id: { type: "string", format: "uuid" },
                title: { type: "string", minLength: 1, maxLength: 255 },
                picture: {
                    type: "string",
                    format: "url",
                    minLength: 1,
                    maxLength: 255,
                },
            },
        }
    }
}

export default Quiz
