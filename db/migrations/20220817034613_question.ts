import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("questions", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"))
        table.integer("number").notNullable()
        table.integer("points").defaultTo(1)
        table.string("picture")
        table.text("text").notNullable()
        table.text("explination")
        table.text("hint")
        table.uuid("quiz_id").references("quizzes.id").onDelete("CASCADE")
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("questions")
}
