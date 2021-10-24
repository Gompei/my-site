import express from 'express'
import { nuxt } from '@/server/nuxt'

const app = express()

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

export default app
