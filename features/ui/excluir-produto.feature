# language: pt
Funcionalidade: Excluir de Produtos
  Como administrador do ServeRest
  Quero excluir produtos da lista
  Para manter o catálogo atualizado

  Cenário: Excluir um produto da lista
    Dado que estou logado no ServeRest
    Quando eu consulto a lista de produtos
    E solicito a exclusão de um produto específico
    Então o produto não deve mais estar disponível na lista
    E os demais produtos cadastrados continuam visíveis
