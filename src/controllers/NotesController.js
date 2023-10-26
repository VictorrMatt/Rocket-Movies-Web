const NoteRepository = require("../repositories/NoteRepository");
const NoteCreateService = require("../services/NoteCreateService");

class NotesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body;
    const user_id = req.user.id;

    let createdTag;

    const noteRepository = new NoteRepository();
    const noteCreateService = new NoteCreateService(noteRepository);

    const { note_id } = await noteCreateService.createNote({
      title,
      description,
      rating,
      user_id,
    });

    if (tags) {
      createdTag = await noteCreateService.createTag({
        tags,
        user_id,
        note_id,
      });
    }

    return res.status(201).json();
  }

  async read(req, res) {
    const { id } = req.params;

    const noteRepository = new NoteRepository();
    const noteCreateService = new NoteCreateService(noteRepository);

    const data = await noteCreateService.read({
      id,
    });

    return res.status(201).json(data);
  }

  async delete(req, res) {
    const { id } = req.params;

    const noteRepository = new NoteRepository();
    const noteCreateService = new NoteCreateService(noteRepository);

    await noteCreateService.delete({
      id,
    });

    return res.status(201).json();
  }

  async index(req, res) {
    const { title } = req.query;
    const user_id = req.user.id;

    const noteRepository = new NoteRepository();
    const noteCreateService = new NoteCreateService(noteRepository);

    const notesWithTags = await noteCreateService.index({
      title,
      user_id,
    });

    return res.status(201).json(notesWithTags);
  }
}

module.exports = NotesController;
