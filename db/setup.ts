import knex from "knex"

import knexfile from "./knexfile"

import { Model } from "objection"

import pino from "pino-http"

function setupDatabase() {
    let db
    if (process.env.ENV === "production") {
        db = knex(knexfile.production)
    } else {
        db = knex(knexfile.development)
        db.on("start", (builder) => {
            pino().logger.info(builder.toString())
        })
    }
    Model.knex(db)
}
export default setupDatabase
