import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./style.css";

const Form = (props) => {
  const { aoPersonagemCadastrado, animes } = props;

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [anime, setAnime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoPersonagemCadastrado({
      nome,
      genero,
      imagem,
      anime,
    });
    setNome("");
    setGenero("");
    setImagem("");
    setAnime("");
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do anime</h2>
        <TextField
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do personagem"
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextField
          valor={genero}
          obrigatorio={true}
          label="Gênero do anime"
          placeholder="Digite o gênero do anime"
          aoAlterado={(valor) => setGenero(valor)}
        />
        <TextField
          valor={imagem}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          valor={anime}
          obrigatorio={true}
          label="Anime"
          itens={animes}
          aoAlterado={(valor) => setAnime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
