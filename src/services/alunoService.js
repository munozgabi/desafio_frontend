export function criarAluno(nome) {
  return {
    id: "a_" + Date.now(),
    nome
  };
}
