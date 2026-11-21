function Resumo({ resumo }) {
  return (
    <div>
      <h2>Resumo</h2>
      <p>Total de séries: {resumo.total}</p>
      <p>Média das avaliações: {resumo.media_avaliacao}</p>
      <p>Melhor série: {resumo.melhor}</p>
    </div>
  );
}

export default Resumo