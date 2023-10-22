import { createContext, useContext, useState } from "react";

import { api } from "../services/api";
import { Form } from "react-router-dom";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      // Armazena o token e informações do usuário no armazenamento local.
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      // Configura o token no cabeçalho das solicitações da API.
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível cadastrar o usuário.";
      alert(message);
    }
  }

  async function logout() {
    // Armazena o token e informações do usuário no armazenamento local.
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      // Faz a atualização do perfil, incluindo o avatar, se fornecido.
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      // Atualiza as informações do usuário no estado local.
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      setData({ user, token: data.token });

      alert("perfil atualizado com sucesso!");
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível atualizar o perfil.";
      alert(message);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
