import express from 'express'
import authors from './controllers/authors'
import books from './controllers/books'

const app = express()
app.use(express.json())

books.addController(app)
authors.addController(app)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
