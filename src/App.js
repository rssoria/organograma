import { useState } from "react";
import Time from "./components/Time";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Titulo from "./components/Titulo";

function App() {
  const [times, setTimes] = useState([
    { nome: "Programação", cor: "#82CFFA" },
    { nome: "Front-end", cor: "#A6D157" },
    { nome: "Data Science", cor: "#E06B69" },
  ]);
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = () => {
    console.log("oi");
  };

  const mudarCorDoTime = (cor, nome) => {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      <Titulo titulo="Minha organização:" />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        ></Time>
      ))}
      <Footer />
    </div>
  );
}

export default App;
