require('dotenv').config();
const Koa = require('koa');
const middlewares = require('./middlewares');

const app = new Koa();
const port = process.env.SERVER_PORT;

// ---- App config ---------------------------------------

// Secret keys
app.keys = [process.env.SESSION_SECRET];

// ---- Middlewares --------------------------------------

app
  // Logger
  .use(middlewares.logger('combined'))
  // Helmet
  .use(middlewares.helmet())
  // Bodyparser
  .use(middlewares.bodyParser())
  // Routes
  .use(middlewares.router.routes())
  .use(middlewares.router.allowedMethods());

// Error handler
app.on('error', (err, ctx) => console.error('server error', err, ctx));

// Server start
app.listen(port, () => console.log(`Server running at: http://localhost:${port}`));
