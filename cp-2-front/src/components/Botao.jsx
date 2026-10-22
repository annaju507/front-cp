function Botao({ children }) {
  return (
    <button
      type="button"
      className="self-start rounded-full bg-botao px-8 py-2 font-botao text-xl tracking-wide text-botao-texto hover:bg-botao/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titulo"
    >
      {children}
    </button>
  )
}

export default Botao
