Full-Stack Challenge CRUD
=========================

<h1> Desafio </h1>

Desenvolver um Crud de Estudantes com as seguintes funcionalidades:
  - Create
  - Read
  - Update
  - Delete

<h1> Decisão de Arquitetura </h1>

  - Resolvi usar o framework Vuetify para o front-end e o framework Express para o back-end como solicitado no desafio.

  - Para o banco de dados, resolvi usar o Postgres alinhado ao ORM Prisma para facilitar a comunicação com o banco de dados.

  - Para as documentações, resolvi usar o Swagger para facilitar a visualização das rotas e seus respectivos parâmetros.

  - Utilizei o JEST para realizar os testes unitários.

  - Resolvi usar o Docker para facilitar a execução do projeto em qualquer ambiente.

<h1> Back-End </h1>

  - O projeto foi desenvolvido para escalabilidade, então pode ser facilmente escalado para uma aplicação completa com login, autenticação, autorização, etc.
  
  - Para a arquitetura de dados, resolvi usar o padrão Clean Architecture, pois acredito que é um padrão que facilita a manutenção do código e a escalabilidade do projeto e por atualmente eu estar estudando sobre o assunto, resolvi aplicar no projeto para praticar.

  - Resolvi usar Typescript para tipagem do código, tentando aplicar os princípios do SOLID e Clean Code.

  - em src/api/modules/students/repositories implementei DTOs, implementations e interfaces para manter o padrão SOLID.

  - em src/api/modules/students/useCases implementei os casos de uso da aplicação (controllers, usecases e factories).

  - Criei uma pasta para cada módulo da aplicação, para facilitar a manutenção do código.

  - Utilizei middlewares para tratar erros.

<h1> Front-End </h1>

  - Foi minha primeira vez utilizando o Vuetify, então tive que estudar um pouco sobre o framework para conseguir desenvolver o projeto. Procurei vídeos no youtube, porém na maioria dos casos, achei mais fácil acompanhar a documentação do framework.

  - Utilizei o conceito de conteinerização para facilitar a manutenção do código e a escalabilidade do projeto.

  - Utilizei o CRUD disponível no Vuetify para agilizar a produção e fiz as adaptações necessárias

  - A aplicação está responsiva, então pode ser acessada tanto em desktop quanto em mobile.

  - A biblioteca axios foi utilizada para realizar as requisições HTTP.

<h1> Possíveis Melhorias </h1>

  - Ter desenvolvido com TDD, pois acredito que é uma boa prática para desenvolvimento de software porém como foi meu primeiro contato com o framework, acabei não conseguindo aplicar.

  - Melhorado a rota de update (talvez tivesse um jeito mais simples de lidar com o CPF que nao trazer ele por todas os metodos mesmo sem precisar dele).

  - Gerado um RA aleatório assim evitaria problemas como o usuario inserir um ra ja existente. (porém no desafio nao foi solicitado então preferi fazer como pedido).

  - Aprender mais como o ciclo de vida do vue funciona. Talvez eu mudasse o (this.student.push) no create pra um novo reload do sistema. Aqui eu estou colocando um objeto no array e no banco ao inves de colocar no banco e chamar o banco novamente (somente no reload o banco atualizaria novamente. acho que é até mais rapido do que chamar a api de novo mas isso é algo que eu quero aprender).

  - Não me orgulhei muito da lógica que fiz nas rules que fiz uma regra pra validar o ra que só funcionasse durante o create (usei pop pra tirar ela no edit e push pra colocar de volta depois do save) mas não sei se tinha um jeito menos poluído de fazer isso então dei meu melhor.

  - Ter desenvolvido testes unitários para o front-end.

<h1> Aprendizados </h1>

  - Aprendi a utilizar o Vuetify e descobrir ser um framework muito poderoso. Com ele é possível criar uma aplicação completa em pouco tempo e com poucas linhas de código e ainda é possível customizar o framework para atender as necessidades do projeto. Definitivamente vou estudar mais sobre Vue e Vuetify por conta desse projeto então foi um aprendizado muito bom.

  - Levei um tempo para entender como o Vuetify funciona, mas depois que entendi, foi bem tranquilo desenvolver a aplicação.

  - Aprendi coisas sobre o Ciclo de vida do Vue e sobre como os hooks, estados e props funcionam.

<h1> Bibliotecas Externas </h1>

  - Axios
  - Jest
  - Swagger

<h1> Como executar o projeto </h1>

  - Para executar o projeto, é necessário ter o Docker instalado na máquina.
  - Após clonar o projeto, acesse a pasta de back-end e execute o comando docker-compose up.
  - Após o docker subir, acesse a pasta de front-end e execute o comando docker-compose up.
  - Acesse o swagger em http://localhost:3333/api-docs
  - Acesse a aplicação em http://localhost:8080
  - Requisições apenas no Back-End podem ser feitas via Swagger ou via Postman no endereço http://localhost:3000/students