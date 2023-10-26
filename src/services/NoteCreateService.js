class NoteCreateService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async createNote({ title, description, rating, tags, user_id }) {
    const note_id = this.noteRepository.createNote({
      title,
      description,
      rating,
      user_id,
    });

    return note_id;
  }

  async createTag({ note_id, user_id, tags }) {
    const tagsInsert = tags.map(async (name) => {
      note_id, user_id, name;

      console.log({ note_id, user_id, name });
      await this.noteRepository.createTag({ note_id, user_id, name });
    });

    return tagsInsert;
  }

  async read({ id }) {
    await this.noteRepository.read({ id });
  }

  async delete({ id }) {
    await this.noteRepository.delete({ id });
  }

  async index({ title, user_id }) {
    const { noteData, noteTags } = await this.noteRepository.index({
      title,
      user_id,
    });

    const notesWithTags = noteData.map((note) => {
      const tags = noteTags.filter((tag) => tag.note_id === note.id);
      return { ...note, tags };
    });

    return {
      notesWithTags,
    };
  }
}
module.exports = NoteCreateService;
