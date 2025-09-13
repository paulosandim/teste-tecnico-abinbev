# language: pt
Funcionalidade: Lista dos Produtos ServeRest
  Como administrador do sistema
  Quero visualizar e gerenciar os produtos cadastrados
  Para manter o catálogo atualizado

  Cenário: Consultar produtos cadastrados
    Dado que estou logado no ServeRest
    Quando eu consulto a lista de produtos
    Então todos os produtos cadastrados devem estar disponíveis com suas informações
