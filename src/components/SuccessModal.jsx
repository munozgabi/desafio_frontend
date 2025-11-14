import React from "react";
{showModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}
  >
    <div className="bg-white p-4 rounded shadow">
      <h4>Turma criada com sucesso!</h4>
      <button className="btn btn-primary mt-3" onClick={confirmarModal}>
        OK
      </button>
    </div>
  </div>
)}
