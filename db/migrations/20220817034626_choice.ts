import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("choices", (table) => {
        table.increments("id").primary()
        table.integer("number").notNullable()
        table.enum("type", ["text", "picture"]).defaultTo("text")
        table.string("text")
        table.string("picture")
        table.uuid("question_id").references("questions.id").onDelete("CASCADE")
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("choices")
}
