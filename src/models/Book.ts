import { Author } from './Author'

export type Book = {
  id: string
  title: string
  authorId: string
  author?: Author
}
