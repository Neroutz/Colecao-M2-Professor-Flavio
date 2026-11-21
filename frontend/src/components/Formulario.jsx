
import { useState } from 'react'

const API = "http://127.0.0.1:8000/api/series/";

function Formulario({ carregarSeries, carregarResumo }) {

  const [titulo, setTitulo] = useState("")
  const [plataforma, setPlataforma] = useState("")
  const [Ano, setAno] = useState("")
  const [avaliacao, setAvaliacao] = useState("")
  const [erro, setErro] = useState("")

  function cadastrar(evento) {
    evento.preventDefault();
    setErro("");

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        plataforma,
        Ano: Number(Ano),
        avaliacao: Number(avaliacao),
      }),
    }).then((res) => {
      if (res.status === 400) {
        res.json().then((dados) => {
          setErro("Não foi possível cadastrar: " + dados.erro);
        });
        return;
      }

      if (res.ok) {
        setTitulo("");
        setPlataforma("");
        setAno("");
        setAvaliacao("");
        carregarSeries();
        carregarResumo();
      }
    });
  }

  return (
    <form onSubmit={cadastrar}>
      <input
        placeholder="titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <input
        placeholder="Plataforma"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
        required
      />

      <input
        placeholder="Ano"
        type="number"
        step="1"
        value={Ano}
        onChange={(e) => setAno(e.target.value)}
        required
      />

      <input
        placeholder="avaliacao"
        type="number"
        step="0.1"
        value={avaliacao}
        onChange={(e) => setAvaliacao(e.target.value)}
        required
      />

      <button type="submit">Cadastrar</button>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </form>
  );
}

export default Formulario
