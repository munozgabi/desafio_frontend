import React from "react";
import { Link } from "react-router-dom";

export default function TurmaCard({ turma }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{turma.disciplina}</h5>
        <p className="card-text">Professor: {turma.professor}</p>
        <p className="card-text">Dia {turma.dia} – Turno {turma.turno}</p>
        <p>Vagas: {turma.capacidade - turma.alunos.length}</p>

        <Link to={`/turmas/${turma.id}`} className="btn btn-primary">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
