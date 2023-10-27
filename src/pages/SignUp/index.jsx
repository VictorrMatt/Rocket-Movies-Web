import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if ((!name, !email, !password)) {
      return alert("Por favor, preencha todos os campos.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        let message = error.response.data.message;
        alert(
          error.response ? message : "Não foi possível cadastrar o usuário."
        );
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <div className="logo">
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <div>
          <Input
            placeholder="Nome"
            icon={FiUser}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="E-mail"
            icon={FiMail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Senha"
            icon={FiLock}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button title="Cadastrar" onClick={handleSignUp} />
        </div>
        <div>
          <FiArrowLeft />
          <Link to="/">Voltar para o login</Link>
        </div>
      </Form>
    </Container>
  );
}
