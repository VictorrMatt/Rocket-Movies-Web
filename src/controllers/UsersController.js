const AppError = require("../utils/AppError");

const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.execute({ name, email, password });
    return res.status(201).json();
  }

  async update(req, res) {
    const { name, email, password, old_password, avatar } = req.body;
    const user_id = req.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);

    /* user not found */
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    /* checking if the email is already in use */
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;

    /* the oldest and newest password are required */
    if (password && !old_password) {
      throw new AppError(
        "Você precisa informar a senha antiga para redefinir a sua senha"
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      /* checking encrypted password */
      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET 
      name = (?),
      email = (?),
      password = (?),
      avatar = (?),
      updated_at = DATETIME('now')
      WHERE id = (?)`,
      [user.name, user.email, user.password, user.avatar, user_id]
    );

    return res.status(200).json();
  }
}

module.exports = UsersController;
