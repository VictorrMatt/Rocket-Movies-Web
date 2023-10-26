const knex = require("../Database/knex");

class NoteRepository {
  async createNote({ title, description, rating, user_id }) {
    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    return { note_id, title, description, rating, user_id };
  }

  async createTag({ note_id, user_id, name }) {
    await knex("movie_tags").insert({ note_id, user_id, name });

    return { note_id, user_id, name };
  }

  async read({ id }) {
    const note = await knex("movie_notes").where({ id }).first();
    const tags = await knex("movie_tags")
      .where({ note_id: id })
      .orderBy("name");

    return {
      ...note,
      tags,
    };
  }

  async delete({ id }) {
    await knex("movie_notes").where({ id }).delete();
  }

  async index({ title, user_id }) {
    const noteData = await knex("movie_notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");

    const noteIds = noteData.map((note) => note.id);
    const noteTags = await knex("movie_tags")
      .whereIn("note_id", noteIds)
      .orderBy("name");

    return { noteData, noteTags };
  }
}

module.exports = NoteRepository;
