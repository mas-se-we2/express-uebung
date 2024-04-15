import { randomUUID } from 'crypto'
import { Express } from 'express'
import { authors } from '../data/authors'
import { books } from '../data/books'

const addController = (app: Express) => {
  app.get('/authors', (req, res) => {
    res.send(authors)
  })

  app.get('/authors/:id/books', (req, res) => {
    const authorBooks = books.filter(book => book.authorId === req.params.id)

    res.send(authorBooks)
  })

  app.post('/authors', (req, res) => {
    const { name } = req.body

    if (!name) {
      return res.status(400).send('Name is required')
    }

    const id = randomUUID()
    const newAuthor = { id, name }
    authors.push(newAuthor)

    res.status(201).send(newAuthor)
  })
}

export default { addController }
