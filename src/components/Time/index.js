import Personagem from "../Personagem";
import "./style.css";

const Time = (props) => {
  const { nome, corPrimaria, corSecundaria, personagens } = props;
  return (
    personagens.length && (
      <section className="time" style={{ backgroundColor: corPrimaria }}>
        <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
        <div className="personagens">
          {personagens.map((personagem) => (
            <Personagem
              key={personagem.nome}
              nome={personagem.nome}
              genero={personagem.genero}
              imagem={personagem.imagem}
              corDeFundo={corSecundaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
