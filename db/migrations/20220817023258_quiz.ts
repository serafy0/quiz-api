import { table } from "console"
import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
    await knex.schema.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

    await knex.schema.createTable("quizzes", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"))
        table.string("title").notNullable()
        table.string("picture")
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("quizzes")
}
