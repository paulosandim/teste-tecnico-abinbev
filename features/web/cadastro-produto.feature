# language: pt
Funcionalidade: Cadastro de Produtos ServeRest
  Como administrador do sistema
  Quero cadastrar novos produtos
  Para que eles fiquem disponíveis

  Cenário: Cadastro válido de produto
    Dado que estou cadastrando um novo produto
    Quando informo todos os dados obrigatórios corretamente
    Então o produto deve ser registrado no sistema
    E deve aparecer na lista de produtos
