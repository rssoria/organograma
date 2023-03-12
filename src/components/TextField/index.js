import { useState } from "react";
import "./style.css";

const TextField = (props) => {
  const { label, placeholder, obrigatorio, valor, aoAlterado } = props;

  const aoDigitar = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitar}
        placeholder={placeholder}
        required={obrigatorio}
      />
    </div>
  );
};

export default TextField;
