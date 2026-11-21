
import { useState } from 'react'

function Lista({ series }) {
  const [busca, setBusca] = useState("")

  const seriesFiltradas = series.filter((serie) =>
    serie.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <h2>Series Avaliadas</h2>

      <input
        placeholder="Buscar série"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {seriesFiltradas.length === 0 ? (
        <p>Nenhum item encontrado</p>
      ) : (
        <ul>
          {seriesFiltradas.map((serie) => (
            <li key={serie.id}>
              {serie.titulo} · plataforma {serie.plataforma} · Ano {serie.Ano} · avaliacao {serie.avaliacao}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista
