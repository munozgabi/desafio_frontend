import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Sistema de Matrículas</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/turmas">Aluno</Link>
          <Link className="nav-link" to="/institucional">Institucional</Link>
        </div>
      </div>
    </nav>
  );
}
