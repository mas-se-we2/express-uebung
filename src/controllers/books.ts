import { randomUUID } from 'crypto'

const uuid = randomUUID()

uuid

import { Express } from 'express'
import { authors } from '../data/authors'
import { books } from '../data/books'

const addController = (app: Express) => {
  app.get('/books', (req, res) => {
    res.send(books)
  })

  app.get('/books/:id', (req, res) => {
    const book = books.find(book => book.id === req.params.id)
    if (!book) {
      return res.status(404).send('Book not found')
    }

    const author = authors.find(author => author.id === book.authorId)
    const bookWithAuthor = { ...book, author }

    res.send(bookWithAuthor)
  })

  app.post('/books', (req, res) => {
    const { title, authorId, genreId } = req.body

    if (!title || !authorId) {
      return res.status(400).send('Title & authorId are required')
    }

    if (!authors.find(author => author.id === authorId)) {
      return res.status(404).send('Author not found')
    }

    const id = randomUUID()
    const newBook = { id, title, authorId, genreId }
    books.push(newBook)

    res.status(201).send(newBook)
  })
}

export default { addController }
