import { Model, AjvValidator } from "objection"

import { default as addFormats } from "ajv-formats"
class BaseModel extends Model {
    static createValidator() {
        return new AjvValidator({
            onCreateAjv: (ajv) => {
                addFormats(ajv)
            },
            options: {
                allErrors: true,
                validateSchema: false,
                ownProperties: true,
            },
        })
    }
}

export default BaseModel
