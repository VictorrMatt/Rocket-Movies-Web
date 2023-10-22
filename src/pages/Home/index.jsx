import { Container, PlaceLink } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/notes?title=${search}&tags`);
        setMovies(response.data);
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : "Não foi possível procurar o filme:";
        alert(message);
      }
    }

    fetchMovies();
  }, [search]);

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <Container>
      <Header handleSearch={updateSearch} />
      <Section>
        <div className="movie-title">
          <h2>Meus filmes</h2>
          <PlaceLink to="/new">
            <Button title="Adicionar filme" />
          </PlaceLink>
        </div>

        <div className="movie-cards">
          {movies &&
            movies.map((movie) => (
              <Card
                key={movie.id}
                onClick={() => handleDetails(movie.id)}
                data={{
                  title: movie.title,
                  rating: movie.rating,
                  description: movie.description,
                  tags: movie.tags,
                }}
              />
            ))}
        </div>
      </Section>
    </Container>
  );
}
