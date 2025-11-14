import React, { useState } from "react";
import { criarTurma } from "../services/turmaService";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NovaTurma() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    disciplina: "",
    professor: "",
    dia: 1,
    turno: 1,
    capacidade: 10,
    alunos: []
  });

  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await criarTurma(form);
      setShowModal(true);
    } catch (err) {
      console.error("Erro ao criar turma:", err);
      alert("Não foi possível criar a turma. Verifique o console.");
    }
  }

  function confirmarModal() {
    setShowModal(false);
    navigate("/institucional");
  }

  return (
    <div className="container mt-4">
      <h2>Criar Nova Turma</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="disciplina"
          placeholder="Disciplina"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="professor"
          placeholder="Professor"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          type="number"
          name="dia"
          placeholder="Dia (1-7)"
          onChange={handleChange}
          min="1"
          max="7"
          required
        />

        <input
          className="form-control mb-2"
          type="number"
          name="turno"
          placeholder="Turno (1-3)"
          onChange={handleChange}
          min="1"
          max="3"
          required
        />

        <input
          className="form-control mb-2"
          type="number"
          name="capacidade"
          placeholder="Capacidade"
          onChange={handleChange}
          min="1"
          required
        />

        <button className="btn btn-success">Salvar</button>
      </form>

      {/* MODAL */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Sucesso!</h5>
              </div>

              <div className="modal-body">
                <p>A turma foi criada com sucesso.</p>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" onClick={confirmarModal}>
                  OK
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

