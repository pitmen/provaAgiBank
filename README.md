# provaAgiBank
Repositório feito para prova da vaga da empresa Agi Bank

## Links Úteis

* [Cypress] (https://www.cypress.io/)

### Instalação

#### Pre-requisitos

* node v12, v14 ou superior:   [download aqui](https://nodejs.org/en/download/)
* npm v6 ou superior:   [download aqui](https://www.npmjs.com/get-npm)
* vscode ou outro editor de código:  [download](https://code.visualstudio.com/download)

#### Instalação do Cypress

Antes de instalar o cypress, vamos iniciar um projeto node. Para isso, abra o terminal e digite:

```bash
npm init
```

Após isso basta apertar enter até o final do processo. Agora vamos instalar o cypress:

```bash
npm install –save-dev cypress
```

e por fim:

```bash
npx cypress open
```

## Exercício proposto pela AgiBank 

https://blogdoagi.com.br/

### Question 11
- Escolha a linguagem de programação de sua preferência para automatizar os dois principais cenários da questão anterior.
- INSTRUÇÕES: Crie o repositório no GitHub (público) e COPIE e COLE o link aqui. Desenvolva a automação e suba o código no repositório.

Cenários:
- Pesquisa válido: Fazer uma pesquisa com o valor "vagas". Resultado esperado, exibir conteúdos sobre vagas.
- Pesquisa inválido: Fazer uma pesquisa com o valor "qwerty". Resultado esperado, exibir "Nenhum resultado".

OBS: para rodar os testes utilizar os comandos:

- executa o comando cypress open
```bash
npm test
```
ou 

- executa o comando cypress run
```bash
npm run
```
