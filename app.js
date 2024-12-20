require('dotenv').config();

const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Knex = require('knex');
const jwt = require('koa-jwt');

const knexConfig = require('./knexfile');
const registerAuth = require('./routes/authRoutes');
const registerProducts = require('./routes/productRoutes');
const registerUsers = require('./routes/userRoutes');
const registerCartItems = require('./routes/cartItemRoutes');
const {
  Model,
  ForeignKeyViolationError,
  ValidationError,
} = require('objection');

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = new Koa();
const router = new KoaRouter();

// Logging middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(cors());
app.use(errorHandler);
app.use(bodyParser());

//JWT middleware
app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    getToken: (ctx) => ctx.cookies.get('token'),
  }).unless({
    path: [/^\/products|^\/auth|^\/users/],
  })
);

// Register REST API.
registerProducts(router);
registerAuth(router);
registerCartItems(router);
registerUsers(router);

app.use(router.routes());
app.use(router.allowedMethods());

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
    console.log('\nERROR HANDLER\n', err, '\nERROR HANDLER\n');
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
    } else if (err.status === 401) {
      ctx.status = 401;
      ctx.body = { error: 'Unauthorized' };
    } else {
      ctx.status = 500;
      ctx.body = {
        error: 'InternalServerError',
        message: err.message || {},
      };
    }
  }
}
