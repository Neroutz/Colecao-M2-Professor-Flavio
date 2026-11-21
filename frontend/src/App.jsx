
import { useEffect, useState } from 'react'
import './App.css'

import Formulario from './components/Formulario'
import Lista from './components/Lista'
import Resumo from './components/Resumo'

const API = "http://127.0.0.1:8000/api/series/";

function App() {
  const [series, setSeries] = useState([])
  const [resumo, setResumo] = useState({})

  function carregarSeries() {
    fetch(API)
      .then((res) => res.json())
      .then((dados) => setSeries(dados));
  }

  function carregarResumo() {
    fetch(API + "resumo/")
      .then((res) => res.json())
      .then((dados) => setResumo(dados));
  }

  useEffect(() => {
    carregarSeries();
    carregarResumo();
  }, []);

  return (
    <div className="pagina">
      <h1>Avalie suas Séries</h1>

      <Resumo resumo={resumo} />

      <Formulario
        carregarSeries={carregarSeries}
        carregarResumo={carregarResumo}
      />

      <Lista series={series} />
    </div>
  );
}

export default App
