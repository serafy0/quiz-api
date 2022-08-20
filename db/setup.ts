import knex from "knex"

import knexfile from "./knexfile"

import { Model } from "objection"

function setupDatabase() {
    let db
    if (process.env.ENV === "production") {
        db = knex(knexfile.production)
    } else {
        db = knex(knexfile.development)
    }
    Model.knex(db)
}
export default setupDatabase
