import "./style.css";

const Personagem = ({ nome, genero, imagem, corDeFundo }) => {
  return (
    <div className="personagem">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{genero}</h5>
      </div>
    </div>
  );
};

export default Personagem;
