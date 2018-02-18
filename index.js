const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const Router = require('koa-oai-router')

const server = app.listen(process.env.PORT || 3001)

app.use(bodyParser())

const opt = {
  apiDoc: './api.yaml',
  controllerDir: './controllers',
  server: server,
  versioning: true,
  apiExplorerVisible: true,
}
const router = new Router(opt)
app.use(router.routes())

app.use(router.apiExplorerV3())
