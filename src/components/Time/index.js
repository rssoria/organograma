import Colaborador from "../Colaborador";
import "./style.css";

const Time = (props) => {
  const {
    nome,
    corPrimaria,
    corSecundaria,
    colaboradores,
    aoDeletar,
    mudarCor,
  } = props;
  return (
    colaboradores.length && (
      <section className="time" style={{ backgroundColor: corPrimaria }}>
        <input
          type="color"
          className="input-cor"
          value={corSecundaria}
          onChange={(evento) => mudarCor(evento.target.value, nome)}
        />
        <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corSecundaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
