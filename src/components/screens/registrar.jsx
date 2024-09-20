import React from "react";
import CadastroForm from "../forms/ClienteForm";
import VestidosForm from "../forms/VestidosForm";
import AcessorioForm from "../forms/AcessorioForm";

const Registrar = () => {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto p-4 gap-4">
      <div className="bg-slate-800 p-4 w-full">
        <h2 className="text-xl font-bold text-center mb-4">Dados cliente</h2>
        <CadastroForm />
      </div>
      <div className="grid grid-cols-2 bg-slate-800	 max-w-7xl w-full mx-auto p-4 gap-4">
        <div className="bg-slate-800 p-4 w-full">
          <h2 className="text-xl font-bold text-center mb-4">Dados Produto</h2>
          <VestidosForm />
        </div>
        <div className="bg-slate-800 p-4 w-full">
          <h2 className="text-xl font-bold text-center mb-4">Dados Produto</h2>
          <AcessorioForm />
        </div>
      </div>
    </div>
  );
};

export default Registrar;
