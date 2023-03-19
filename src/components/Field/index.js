import "./style.css";

const Field = (props) => {
  const {
    type = "text",
    label,
    placeholder,
    obrigatorio,
    valor,
    aoAlterado,
  } = props;

  const aoDigitar = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        placeholder={placeholder}
        required={obrigatorio}
      />
    </div>
  );
};

export default Field;
