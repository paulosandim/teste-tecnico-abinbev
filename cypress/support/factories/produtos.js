import { faker } from '@faker-js/faker'

export const gerarProdutoFake = () => ({
  nome: faker.commerce.productName(),
  preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
  descricao: faker.commerce.productDescription(),
  quantidade: faker.number.int({ min: 10, max: 100 })
})

export default gerarProdutoFake

