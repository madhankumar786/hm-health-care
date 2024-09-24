import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // db.json file path
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT, and PATCH, we need to use body-parser
server.use(jsonServer.bodyParser);

// Add custom routes or middleware if needed
server.use((req, res, next) => {
  console.log('Custom Middleware!');
  next();
});

// Use default router
server.use(router);

// Start the server
const PORT = 7000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
