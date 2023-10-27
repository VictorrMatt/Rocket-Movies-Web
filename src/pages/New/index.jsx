import { Container, Textarea } from "./styles";

import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Input } from "../../components/Input";
import { Mark } from "../../components/Mark";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(undefined);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    if (newTag) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleCleanNote() {
    setTags([]);
    setTitle("");
    setDescription("");
    setRating("");
  }

  async function handleNewNote() {
    let checkValueOfRating = rating >= 0 && rating <= 5;

    if (!title) {
      return alert("Digite o título da nota.");
    }

    if (!checkValueOfRating) {
      return alert("Por favor, digite um número inteiro entre 0 e 5");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em salvar. Clique para adicionar ou deixe o campo vázio."
      );
    }

    alert("Nota criada com sucesso!");
    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });
  }

  function handleBack() {
    navigate(-1);
  }
  return (
    <Container>
      <Header userName="VictorrMatt" />
      <Section>
        <ButtonLink title="Voltar" icon onClick={() => handleBack()} />
        <main>
          <h2>Novo filme</h2>
          <div className="inputs">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <div className="markers_container">
            <h3>Marcadores</h3>
            <div className="markers">
              {tags.map((tag, index) => (
                <Mark
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <Mark
                placeholder="Novo Marcador"
                $isNew
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>
          <div className="buttons">
            <Button title="Limpar" onClick={handleCleanNote} />
            <Button
              title="Salvar alterações"
              $altercolors
              onClick={handleNewNote}
            />
          </div>
        </main>
      </Section>
    </Container>
  );
}
