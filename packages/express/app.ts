import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import router from './router'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT || 3000

app.use('/api', router)

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`)
})
