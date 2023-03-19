import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { aoCadastrar, times, cadastrarTime } = props;

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoCadastrar({
      id: uuidv4(),
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
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do colaborador"
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextField
          valor={cargo}
          obrigatorio
          label="Cargo"
          placeholder="Digite cargo do colaborador"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <TextField
          valor={imagem}
          obrigatorio
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          valor={time}
          obrigatorio
          label="Time"
          itens={times}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <TextField
          valor={nomeTime}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <TextField
          valor={corTime}
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
