import { Container, Clock } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Rating } from "../../components/Rating";
import { ButtonLink } from "../../components/ButtonLink";
import { Tag } from "../../components/Tag";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  function handleBack() {
    navigate(-1);
  }

  async function removeMovie() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header userName="VictorrMatt" />
      {data && (
        <Section>
          <div className="buttons">
            <ButtonLink title="Voltar" icon onClick={() => handleBack()} />
            <ButtonLink
              title="Excluir"
              onClick={() => removeMovie()}
              stressed
            />
          </div>
          <div className="movie_title">
            <h2>{data.title}</h2>
            <Rating rating={data.rating} />
          </div>
          <div className="user_data">
            <img
              src="https://github.com/victorrmatt.png"
              alt="imagem do usuario."
            />
            <span>
              Por&nbsp;<a href="">{user.name}</a>
            </span>

            <Clock />
            <span>{data.updated_at}</span>
          </div>
          <div className="movie_tags">
            {data.tags &&
              data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
          </div>
          <div className="movie_description">
            <p>{data.description}</p>
          </div>
        </Section>
      )}
    </Container>
  );
}
