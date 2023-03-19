import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./style.css";

const Form = (props) => {
  const { aoColaboradorCadastrado, times } = props;

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do coleborador</h2>
        <TextField
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do colaborador"
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextField
          valor={cargo}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite cargo do colaborador"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <TextField
          valor={imagem}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          valor={time}
          obrigatorio={true}
          label="Time"
          itens={times}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
