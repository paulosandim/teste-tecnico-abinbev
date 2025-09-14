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
- [GitHub Actions](https://github.com/features/actions)
- [Allure Report](https://allurereport.org/docs/cypress/)
- [Cypress plugin API](https://www.npmjs.com/package/cypress-plugin-api?ref=cypress-io.ghost.io)

---

## Instalação e execução

### Instalação das dependências:

```
npm install
```

### Execução:

**Headless:**

```
npm test
```

**Cypress UI:**

```
npm run test:ui
```

---

### Execução via GitHub Actions:

- É possível executar qualquer Workflow do GitHub Actions novamente. É só clicar na opção [Actions](https://github.com/paulosandim/teste-tecnico-abinbev/actions), selecionar o Workflow que deseja, clicar em _Re-run all jobs_ e confirma no _Re-run jobs_.

---

## Decisões Técnicas:

### Separação de Responsabilidades

- **Pages**: encapsulam seletores e ações de UI por tela.
- **API Helper**: concentra chamadas HTTP e regras da API.
- **Factories**: centralizam geração de dados com _faker_ para reuso e controle de seed.
- **Commands**: funcionam como uma “casca”, delegando para _pages_ e _API helpers_, mantendo a mesma interface usada nos testes.

### Estrutura do Projeto

- **UI**: `cypress/support/pages/LoginPage.js` e `cypress/support/pages/ProdutosPage.js` encapsulam seletores e ações.
- **API**: `cypress/support/api/produtosApi.js` centraliza login/token, CRUD e parsing de respostas.
- **Dados**: `cypress/support/factories/produtos.js` evita duplicação de _faker_ e facilita controlar variabilidade.
- **Adaptação**: `cypress/support/commands.js` delega para as outras camadas sem alterar a interface dos comandos.

### Dessa forma conseguimos:

- Se um **seletor** mudar, a alteração é feita em apenas um lugar (_Page_).
- Se um **endpoint ou header** mudar, basta ajustar no _API Helper_.
- Fluxos maiores podem ser compostos reutilizando _Pages_ + _APIs_.
- Os testes ficam **mais legíveis** e flexíveis, podendo usar _Commands_ de alto nível ou interagir diretamente com _Pages_ em cenários específicos.

### Por que não centralizar tudo em `commands.js`?

- Cresceria de forma **monolítica**, misturando regras de **UI**, **API** e **dados**.
- Geraria **duplicação** de seletores e regras de negócio espalhadas.
- Restringiria o **reuso** fora do `Cypress.Commands`.

### Observações:

- Embora seja possível concentrar toda a lógica em `commands.js`, a divisão em camadas traz **maior manutenibilidade, clareza e reuso** a longo prazo.
- Um dos critérios de avaliação do Teste Técnico era **"Aplicação de padrões de projeto"**.

---

## OBRIGADO!!

![meme-gato-inbev](img.png)
