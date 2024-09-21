import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClienteForm from "../forms/ClienteForm";
import VestidosForm from "../forms/VestidosForm";
import AcessorioForm from "../forms/AcessorioForm";

const Registrar = () => {
  const { valor } = useParams();
  const [screen, setScreen] = useState(valor);

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  const renderForm = () => {
    if (screen === "cliente") {
      return <ClienteForm />;
    } else if (screen === "vestido") {
      return <VestidosForm />;
    } else if (screen === "acessorio") {
      return <AcessorioForm />;
    } else {
      return <p>Selecione uma opção</p>;
    }
  };

  return (
    <>
      <h1>Menu</h1>
      <ul>
        <li>
          <button onClick={() => changeScreen("cliente")}>Registrar cliente</button>
        </li>
        <li>
          <button onClick={() => changeScreen("vestido")}>Registrar vestido</button>
        </li>
        <li>
          <button onClick={() => changeScreen("acessorio")}>Registrar acessorio</button>
        </li>
      </ul>
      <div>{renderForm()}</div>
    </>
  );
};

export default Registrar;