import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./style.css";

const Time = (props) => {
  const { id, nome, cor, colaboradores, aoDeletar, mudarCor } = props;
  return (
    colaboradores.length && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(cor, "0.6") }}
      >
        <input
          type="color"
          className="input-cor"
          value={cor}
          onChange={(evento) => mudarCor(evento.target.value, id)}
        />
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              id={colaborador.id}
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={cor}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
