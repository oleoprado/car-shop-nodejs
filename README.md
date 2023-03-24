<!-- # :construction: README em construção ! :construction: -->
<div align="center">
<h1>Car Shop</h1>


<!-- BADGES W/ LINK (see https://shields.io/)-->
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) &nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) &nbsp;  ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white) &nbsp;
</div>

<!-- DESCRIPTION -->
<p>
Este projeto consiste em uma REST API com CRUD (create, read, update, delete), que simula o gerenciamento de uma concessionária de veículos. É possível criar, ler, atualizar e excluir carros e motos no banco de dados não relacional MongoDB, utilizando a ODM Mongoose para a manipulação dos dados.
</p>
<p>
foram utilizados conceitos de Docker para a criação de containers, a arquitetura de código seguindo o modelo MSC, além de POO e TypeScript para garantir a robustez do projeto e o SOLID para manter a boa escrita e manutenibilidade do código.
</p>
<p>
Para garantir a qualidade e confiabilidade da API, foi utilizada a metodologia de TDD (Test Driven Development) em todo o desenvolvimento. Todos os testes unitários foram executados durante o processo de implementação, permitindo uma rápida identificação e correção de eventuais erros ou bugs, bem como uma maior segurança na evolução do código.
</p>


<!-- INSTALLATION AND USAGE -->

## ⚙️ Instalação e Uso

Você precisa ter o [node](https://nodejs.org/en/download/) instalado em seu computador para executar este projeto. Este projeto foi criado usando a versão `v16.15.1.`

Você precisa ter o [docker](https://www.docker.com/products/docker-desktop/) e o [docker compose cli](https://www.docker.com/products/docker-desktop/) instalados em seu computador para executar este projeto. Este projeto foi criado usando as versões `v20.10` e `v1.29` respectivas.

Para executar esta aplicação, você precisa fazer o clone para seu computador:

```bash
git clone git@github.com:oleoprado/car-shop-nodejs.git
```

Entre no diretório:

```bash
cd seu-repositorio
```

Instalar as depedências:

```bash
npm install
```

Crie um arquivo .env na raiz do projeto e preencha com as seguintes informações:

```bash
PORT=3000
MONGODB_URL=mongodb://localhost/CarShop
```

Executar o `docker-compose`:

```bash
docker-compose up -d
```

Para iniciar a aplicação, executar na raíz do projeto:

```bash
npm run dev
```

A aplicação estará acessível:

```bash
https://localhost:3001
```

Para rodar os testes unitários da camada service:

```bash
npm run test:mocha
```

Para rodar os testes de cobertura da camada service:

```bash
npm run test:coverage
```
---

## ⚙️ Utilização

Com o servidor iniciado, você poderá utilizar a API para simular o gerenciamento dos dados da concessionária de veículos. Para isso, utilize uma ferramenta para requisições `HTTP`, como o **Postman** ou o **Insomnia**.

As rotas disnponíveis são:

* `GET /cars` retorna uma lista com todos os carros cadastrados
* `GET /cars/:id` retorna um carro específico, com base no ID informado
* `POST /cars` cria um novo carro
* `PUT /cars/:id` atualiza um carro existente, com base no ID informado
* `DELETE /cars/:id` exclui um carro existente, com base no ID informado
* `GET /motorcycles` retorna uma lista com todas as motos cadastradas
* `GET /motorcycles/:id` retorna uma moto específica, com base no ID informado
* `POST /motorcycles` cria uma nova moto
* `PUT /motorcycles/:id` atualiza uma moto existente, com base no ID informado
* `DELETE /motorcycles/:id` exclui uma moto existente, com base no ID informado

O corpo da requisição deverá estar no formato `JSON`.

Exemplo para criar uma nova moto:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

---

<!-- CONTACT -->

## ✉️ Contato

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oleoprado/) ![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)


<!-- LICENSE -->

## 📝 Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
