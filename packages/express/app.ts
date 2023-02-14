import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World! get')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World! post')
})

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`)
})
