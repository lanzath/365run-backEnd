// Importa json server.
const jsonServer = require('json-server');

// Cria um novo server.
const server = jsonServer.create();

// Utiliza as chaves do json de db.json como endpoints
const router = jsonServer.router('db.json');

// Configuração padrão de middlewares.
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`JSON server is running in ${port}`);
});
