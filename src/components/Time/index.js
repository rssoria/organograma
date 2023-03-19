import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./style.css";

const Time = (props) => {
  const { nome, cor, colaboradores, aoDeletar, mudarCor } = props;
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
          onChange={(evento) => mudarCor(evento.target.value, nome)}
        />
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
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
