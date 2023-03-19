import Colaborador from "../Colaborador";
import "./style.css";

const Time = (props) => {
  const { nome, corPrimaria, corSecundaria, colaboradores } = props;
  return (
    colaboradores.length && (
      <section className="time" style={{ backgroundColor: corPrimaria }}>
        <h3 style={{ borderColor: corSecundaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corSecundaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
