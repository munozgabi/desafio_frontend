import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TurmasList from "./pages/TurmasList";
import TurmaDetails from "./pages/TurmaDetails";
import InstitucionalDashboard from "./pages/InstitucionalDashboard";
import NovaTurma from "./pages/NovaTurma";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turmas" element={<TurmasList />} />
        <Route path="/turmas/:id" element={<TurmaDetails />} />
        <Route path="/institucional" element={<InstitucionalDashboard />} />
        <Route path="/institucional/nova" element={<NovaTurma />} />
        <Route path="/home/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

