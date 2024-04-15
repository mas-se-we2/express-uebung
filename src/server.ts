import express from 'express'
import authors from './endpoints/authors'
import books from './endpoints/books'

const app = express()
app.use(express.json())

books.addController(app)
authors.addController(app)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
