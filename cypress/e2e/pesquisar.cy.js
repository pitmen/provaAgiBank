import homePage from '../support/pages/home'

describe('Pesquisa', () => {
  
  const mensagemPesquisa = 'vagas'
  const messageInvalida = 'Nenhum resultado'
  const mensagemValida = `Resultados da busca por: ${mensagemPesquisa}`

  context('Quando o cliente realizar uma pesquisa no blog do AgiBank', () => {
    beforeEach(() => {
      homePage.visitarPagina()
      
    });
    it('Então deve aparecer o seguinte resultado válido', () => {
      homePage.realizarPesquisa(mensagemPesquisa)
      homePage.mensagem.deveConterOTexto(mensagemValida)
    });

    it('Então deve aparecer o seguinte resultado inválido', () => {
      homePage.realizarPesquisa('qwerty')
      homePage.mensagem.deveRetornarSemResultado(messageInvalida)
    });
  });
})