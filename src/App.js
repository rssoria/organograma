import { useState } from "react";
import Time from "./components/Time";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Titulo from "./components/Titulo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    { nome: "Programação", cor: "#82CFFA", id: uuidv4() },
    { nome: "Front-end", cor: "#A6D157", id: uuidv4() },
    { nome: "Data Science", cor: "#E06B69", id: uuidv4() },
  ]);
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        cadastrarTime={cadastrarTime}
        aoCadastrar={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}
        times={times.map((time) => time.nome)}
      />
      <Titulo titulo="Minha organização:" />
      {times.map((time) => (
        <Time
          key={time.id}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        ></Time>
      ))}
      <Footer />
    </div>
  );
}

export default App;
