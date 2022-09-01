import BaseModel from "../../db/base.model"

class Choice extends BaseModel {
    static get tableName() {
        return "choices"
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
                text: { type: "string" },
                explanation: { type: "string" },
                type: { type: "string", enum: ["text", "picture"] },
                question_id: { type: "string", format: "uuid" },

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

export default Choice
