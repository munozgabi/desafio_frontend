import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarTurma, atualizarTurma } from "../services/turmaService";
import { criarAluno } from "../services/alunoService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function TurmaDetails() {
  const { id } = useParams();
  const [turma, setTurma] = useState(null);
  const [nomeAluno, setNomeAluno] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalMensagem, setModalMensagem] = useState("");

  useEffect(() => {
    buscarTurma(id).then(setTurma);
  }, [id]);

  async function matricular() {
    if (!nomeAluno.trim()) {
      setModalMensagem("Digite um nome");
      setShowModal(true);
      return;
    }

    if (turma.alunos.some(a => a.nome === nomeAluno)) {
      setModalMensagem("Você já está matriculado!");
      setShowModal(true);
      return;
    }

    if (turma.alunos.length >= turma.capacidade) {
      setModalMensagem("Turma cheia.");
      setShowModal(true);
      return;
    }

    const novo = criarAluno(nomeAluno);
    const atualizada = {
      ...turma,
      alunos: [...turma.alunos, novo]
    };

    try {
      await atualizarTurma(turma.id, atualizada);
      setTurma(atualizada);
      setModalMensagem("Matrícula realizada com sucesso!");
      setShowModal(true);
      setNomeAluno(""); 
    } catch (err) {
      console.error("Erro ao matricular:", err);
      setModalMensagem("Ocorreu um erro ao matricular o aluno.");
      setShowModal(true);
    }
  }

  function confirmarModal() {
    setShowModal(false);
  }

  if (!turma) return <p>Carregando...</p>;

  return (
    <div className="container mt-4">
      <h2>{turma.disciplina}</h2>
      <p>Professor: {turma.professor}</p>
      <p>Dia {turma.dia} – Turno {turma.turno}</p>
      <p>Vagas: {turma.capacidade - turma.alunos.length}</p>

      <h4>Alunos matriculados:</h4>
      <ul>
        {turma.alunos.map(a => (
          <li key={a.id}>{a.nome}</li>
        ))}
      </ul>

      <div className="mt-4">
        <h4>Matricular aluno</h4>
        <input
          className="form-control mb-2"
          placeholder="Nome do aluno"
          value={nomeAluno}
          onChange={e => setNomeAluno(e.target.value)}
        />
        <button className="btn btn-success" onClick={matricular}>
          Matricular
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Mensagem</h5>
              </div>

              <div className="modal-body">
                <p>{modalMensagem}</p>
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

