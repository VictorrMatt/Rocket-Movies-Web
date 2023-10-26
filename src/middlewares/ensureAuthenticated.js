// Importações necessárias
const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

// Este middleware é uma parte essencial de sistemas de autenticação baseados em JWT, garantindo a segurança e o controle de acesso adequado em rotas protegidas.
function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  // Verificação da presença do Token JWT no cabeçalho da requisição
  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  // Separação do Token da palavra 'Bearer'
  const [, token] = authHeader.split(" ");

  try {
    // Verificação e decodificação do Token JWT
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    // Atribuição do ID do usuário autenticado ao objeto de requisição (req)
    req.user = {
      id: Number(user_id),
    };

    // Prosseguir com a próxima função middleware ou rota
    return next();
  } catch {
    // Tratamento de erros no caso de um Token JWT inválido
    throw new AppError("JWT Token inválido", 401);
  }
}

// Exportação do Middleware para uso em rotas
module.exports = ensureAuthenticated;
