import Botao from './Botao'

function Cartao({ imagem, descricaoImagem, titulo, textoBotao, children }) {
  return (
    <article className="flex min-h-screen bg-card">
      <img
        className="w-1/2 object-cover"
        src={imagem}
        alt={descricaoImagem}
      />
      <div className="flex w-1/2 flex-col gap-6 p-10">
        <h1 className="font-titulo text-[80px] leading-none text-titulo">{titulo}</h1>
        <p className="font-paragrafo leading-relaxed text-paragrafo">{children}</p>
        <Botao>{textoBotao}</Botao>
      </div>
    </article>
  )
}

export default Cartao
