import { Container, PlaceLink } from "./styles";
import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ userName, handleSearch, ...rest }) {
  const { logout, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  function handleProfile() {
    navigate("/profile");
  }

  function handleHome() {
    navigate("/");
  }

  function handlelogout() {
    logout();
  }

  return (
    <Container>
      <PlaceLink onClick={handleHome}>
        <h2>RocketMovies</h2>
      </PlaceLink>
      <Input
        placeholder="Pesquisar pelo título"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <div className="userData">
        <div>
          <PlaceLink onClick={handleProfile}>
            <h2 onClick={handleProfile}>{user.name}</h2>
          </PlaceLink>
          <a onClick={handlelogout}>sair</a>
        </div>
        <PlaceLink onClick={handleProfile}>
          <img src={avatarUrl} alt={user.name} />
        </PlaceLink>
      </div>
    </Container>
  );
}
