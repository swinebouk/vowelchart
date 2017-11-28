const Koa = require('koa')
const Router = require('koa-oai-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(require('koa-static')('build', {}))

const server = app.listen(process.env.PORT || 3000)

const opt = {
  apiDoc: './api/api.yaml',
  controllerDir: './controllers',
  server: server,
  versioning: true,
  apiExplorerVisible: true,
}

const router = new Router(opt)

app.use(router.routes())
app.use(router.apiExplorer())
