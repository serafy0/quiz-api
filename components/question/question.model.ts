import BaseModel from "../../db/base.model"

class Question extends BaseModel {
    static get tableName() {
        return "questions"
    }

    static get idColumn() {
        return "id"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["text", "number"],

            properties: {
                number: { type: "number", minLength: 1 },
                points: { type: "number", minLength: 1 },
                text: { type: "string" },
                explanation: { type: "string" },
                hint: { type: "string" },
                quiz_id: { type: "string", format: "uuid" },
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

export default Question
