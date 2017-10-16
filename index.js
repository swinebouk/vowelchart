const Koa = require('koa');
const app = new Koa();
app.use(require('koa-static')('static', {}));

app.listen(process.env.PORT || 3000);
