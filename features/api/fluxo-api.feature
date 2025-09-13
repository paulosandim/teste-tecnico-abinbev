# language: pt
Funcionalidade: API de Produtos - Endpoints Serverest
  Como administrador
  Quero interagir com a API de produtos do Serverest
  Para que o sistema reflita corretamente minhas ações

  Esquema do Cenário: Cadastrar novo produto via POST /produtos
    Dado que possuo um token de administrador válido
    E que tenho os dados de produto válidos
    Quando envio requisição POST para "/produtos" com <nome>, <preco>, <descricao> e <quantidade>
    Então a API deve responder com status 201
    E a mensagem "Cadastro realizado com sucesso"

    Exemplos:
      | nome   | preco | descricao        | quantidade |
      | Corona |   6.0 | Cerveja leve     |          8 |
      | Spaten |  4.50 | Cerveja malatada |         16 |

  Cenário: Listar produtos via GET /produtos
    Dado que existem produtos cadastrados previamente
    Quando envio requisição GET para "/produtos"
    Então a API deve responder com status 200
    E o corpo da resposta deve conter os produtos com suas informações

  Cenário: Excluir produto existente via DELETE /produtos/{_id}
    Dado que tenho <id_produto> de um produto cadastrado que desejo excluir
    Quando envio requisição DELETE para "/produtos/_<id_produto>"
    Então a API deve responder com status 200
    E a mensagem "Registro excluído com sucesso"
