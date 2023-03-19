import { useState } from "react";
import Time from "./components/Time";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const animes = [
    { nome: "Naruto", corPrimaria: "#dd865e", corSecundaria: "#dfd253" },
    { nome: "Dragon Ball", corPrimaria: "#f7cb0a", corSecundaria: "#f71320" },
    { nome: "One Piece", corPrimaria: "#4dc1dd", corSecundaria: "#6f1e1b" },
  ];
  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemAdicionado(personagem)
        }
        animes={animes.map((anime) => anime.nome)}
      />
      {animes.map((anime) => (
        <Time
          key={anime.nome}
          nome={anime.nome}
          corPrimaria={anime.corPrimaria}
          corSecundaria={anime.corSecundaria}
          personagens={personagens.filter(
            (personagem) => personagem.anime === anime.nome
          )}
        ></Time>
      ))}
      <Footer />
    </div>
  );
}

export default App;
