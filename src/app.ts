import express, { Request, Response } from 'express'
import diaryRouter from './routes/diaries'
const app = express()

app.get('/hello', (_req: Request, res: Response) => {
  res.send({ message: 'Hello World' })
})
const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!!' + new Date().toLocaleDateString())
  res.send('pong')
})
app.use('/api/diaries', diaryRouter)

app.use(express.json()) // middleware que trasforma la req.body a un json

app.listen(PORT, () => {
  console.log(`Server Run on port ${PORT}`)
})
