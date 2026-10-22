import fotoArianaGrande from './assets/foto-ariana-grande.jpg'
import Cartao from './components/Cartao'

function App() {
  return (
    <main className="min-h-screen">
      <Cartao
        imagem={fotoArianaGrande}
        descricaoImagem="Ariana Grande com o cabelo preso em um rabo de cavalo alto"
        titulo="Ariana Grande"
        textoBotao="Saiba mais"
      >
        Ariana Grande é uma aclamada cantora, compositora e atriz norte-americana, nascida na Flórida em 1993.
        Ela iniciou sua trajetória artística no teatro musical da Broadway aos 15 anos de idade,
        mas ganhou projeção mundial ao interpretar a personagem Cat Valentine nas séries da Nickelodeon.
        Sua transição para a música pop ocorreu em 2013 com o elogiado álbum de estreia Yours Truly.
        Dona de um poderoso alcance vocal de quatro oitavas, ela se consolidou como uma das maiores hitmakers.
        Sua discografia de sucesso inclui os aclamados discos Dangerous Woman, Thank U, Next e Eternal Sunshine.
        Ao longo da jornada, ela quebrou recordes nas paradas globais e conquistou múltiplos prêmios Grammy.
        Como empresária de sucesso, ela também fundou a popular marca de cosméticos R.E.M. Beauty.
        Nos cinemas, ela demonstrou versatilidade ao estrelar como a bruxa Glinda na adaptação de Wicked.
        Atualmente, ela busca equilibrar sua consolidada carreira musical com novas produções e atuações nos palcos.
      </Cartao>
    </main>
  )
}

export default App
