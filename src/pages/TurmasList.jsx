import React, { useState, useEffect } from "react";
import { listarTurmas } from "../services/turmaService";
import TurmaCard from "../components/TurmaCard";

export default function TurmasList() {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    listarTurmas().then(data => setTurmas(data));
  }, []);

  return (
    
    <div className="container mt-4">
      <div className="container mt-4">
      <h2>Painel do Aluno</h2>
      <p>Visualize e realize matrículas em turmas disponíveis.</p>
    </div>
      <h2>Turmas Disponíveis</h2>
      <div className="row">
        {turmas.map(t => (
          <div key={t.id} className="col-md-4">
            <TurmaCard turma={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
