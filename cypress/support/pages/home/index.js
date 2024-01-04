import { el } from "./elements";
import mensagem from "../component/mensagem";

class HomePage{

    constructor(){
        this.mensagem = mensagem
    }
    
    visitarPagina(){
        cy.visit('/')
    }
    
    realizarPesquisa(texto){
        cy.get(el.botaoPesquisarInicial)
            .click()
        cy.get(el.campoPesquisar)
            .click()
            .type(texto)
        cy.get(el.botaoPesquisar)
            .click()
    }
}

export default new HomePage()