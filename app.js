require('dotenv').config();

const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const Knex = require('knex');
const knexConfig = require('./knexfile');
const registerProducts = require('./routes/productRoutes');
const registerUsers = require('./routes/userRoutes');
const {
  Model,
  ForeignKeyViolationError,
  ValidationError,
} = require('objection');

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

const router = new KoaRouter();
const app = new Koa();

// Logging middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Register our REST API.
registerProducts(router);
registerUsers(router);

app.use(cors());
app.use(errorHandler);
app.use(bodyParser());
app.use(router.routes());

const server = app.listen(8641, () => {
  console.log('Example app listening at port %s', server.address().port);
});

// Error handling.
//
// NOTE: This is not a good error handler, this is a simple one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/recipes/error-handling.html
async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err instanceof ValidationError) {
      ctx.status = 400;
      ctx.body = {
        error: 'ValidationError',
        errors: err.data,
      };
    } else if (err instanceof ForeignKeyViolationError) {
      ctx.status = 409;
      ctx.body = {
        error: 'ForeignKeyViolationError',
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        error: 'InternalServerError',
        message: err.message || {},
      };
    }
  }
}
