import Ajv from "ajv"
import addFormats from "ajv-formats"
const ajv = new Ajv()
addFormats(ajv)

const IdSchema = {
    type: "object",
    required: ["id"],
    properties: {
        id: { type: "string", format: "uuid" },
    },
}

const validateId = ajv.compile(IdSchema)

export { validateId, IdSchema }
