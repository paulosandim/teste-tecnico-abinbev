# Teste Técnico AB InBev - Testes Automatizados com Cypress

Este projeto contém a automação de testes end-to-end para Web e API da loja virtual [ServeRest](https://serverest.dev/).

É parte de um Teste Técnico para vaga de QA Sênior na empresa **AB InBev (Anheuser-Busch InBev)**.

---

## Funcionalidades Testadas na Automação Web

- Login do usuário
- Cadastro de um novo produto
- Listagem de um ou mais produtos
- Exclusão de um produto

## Funcionalidades Testadas na Automação da API

- Login do usuário
- Cadastro de um novo produto
- Listagem de um ou mais produtos
- Exclusão de um produto
- Fluxo completo de um produto

## Casos de Testes

- Os Casos de teste estão na pasta [features](./features), no formato Gherkin e prontos para serem usados com Cucumber.

- Foram divididos em API e Web.

---

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Faker](https://fakerjs.dev/)
- [Node.js 22+](https://nodejs.org/en/download)
- [Postman](https://www.postman.com/)
- [GitHub Actions](https://github.com/features/actions)

---

## Instalação e execução

### Instalação das dependências:

```
npm install
```

### Execução:

```
npm test
```

---

## Evidências dos Testes

### Execução Completa no Postman:

### Execução Completa e Relatório HTML:

### Execução via GitHub Actions:

- É possível executar qualquer Workflow do GitHub Actions novamente. É só clicar na opção [Actions](https://github.com/paulosandim/teste-tecnico-abinbev/actions), selecionar o Workflow que deseja, clicar em _Re-run all jobs_ e confirma no _Re-run jobs_.
