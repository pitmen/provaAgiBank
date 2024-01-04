import { el } from "./elements";

class Mensagem{
    deveConterOTexto(mensagemEsperada){
        cy.get(el.mensagem, { timeout:7000 })
            .should('be.visible')
            .should('have.text', mensagemEsperada)
    }

    deveRetornarSemResultado(mensagemEsperada){
        cy.get(el.mensagemInvalida, { timeout:7000 })
        .should('be.visible')
        .should('have.text', mensagemEsperada)
    }
}

export default new Mensagem()