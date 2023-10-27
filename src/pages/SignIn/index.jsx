import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <div className="logo">
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <div>
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
          <Button title="Entrar" onClick={handleSignIn} />
        </div>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
