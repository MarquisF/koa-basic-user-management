
/**
 * node_modules dependencies
 */
const http = require('http');
// const https = require('https');
const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

/**
 * local files
 */
const appRoutes = require('./routes/index');

/**
 * create instances
 */
const app = new Koa();
const router = new Router();

/**
 * connect to mongodb server
 */
mongoose.connect(
  'mongodb://localhost/koaUserManagement',
  {
    useNewUrlParser: true
  }
);

app.context.db = mongoose.connection;
app.context.db.on('error', console.error.bind(console, 'connection error:'));
app.context.db.once('open', () => {
  console.log('The system is connected to MongoDB');
})

/**
 * load middlewares
 */
app.use(bodyParser());
app.use(appRoutes.routes());

/**
 * start the http server
 */
http.createServer(app.callback()).listen(3000);
console.log('The event tracker is listening on port 3000');