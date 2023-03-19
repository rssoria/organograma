import { useState } from "react";
import Time from "./components/Time";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const times = [
    { nome: "Naruto", corPrimaria: "#dd865e", corSecundaria: "#dfd253" },
    { nome: "Dragon Ball", corPrimaria: "#f7cb0a", corSecundaria: "#f71320" },
    { nome: "One Piece", corPrimaria: "#4dc1dd", corSecundaria: "#6f1e1b" },
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
