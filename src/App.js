import { useState } from "react";
import Time from "./components/Time";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#E8FFFF", corSecundaria: "#82CFFA" },
    { nome: "Front-end", corPrimaria: "#E9FFE3", corSecundaria: "#A6D157" },
    { nome: "Data Science", corPrimaria: "#F16165", corSecundaria: "#E06B69" },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
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
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        ></Time>
      ))}
      <Footer />
    </div>
  );
}

export default App;
