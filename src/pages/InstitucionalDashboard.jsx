import React, { useEffect, useState } from "react";
import { listarTurmas } from "../services/turmaService";
import { Link } from "react-router-dom";

export default function InstitucionalDashboard() {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    listarTurmas().then(setTurmas);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Painel Institucional</h2>

      <Link className="btn btn-primary mb-3" to="/institucional/nova">
        Criar Nova Turma
      </Link>

      <h4>Turmas cadastradas</h4>

      {turmas.map(t => (
        <div key={t.id} className="card mb-3">
          <div className="card-body">
            <h5>{t.disciplina}</h5>
            <p>Professor: {t.professor}</p>
            <p>Alunos: {t.alunos.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
