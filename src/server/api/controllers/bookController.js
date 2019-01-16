const Book = require('../model').Book;
const Author = require('../model').Author;

module.exports = {
  list(req, res) {
    return Book
      .findAll()
      .then((books) => res.status(200).send(books))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Book
      .findByPk(req.params.id, {})
      .then((book) => {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found',
          });
        }
        return res.status(200).send(book);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Book
      .create({
        name: req.body.name,
        isbn: req.body.isbn,
        publishDate:req.body.publishDate,
        author_id:req.body.authorId
      })
      .then((book) => res.status(201).send(book))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Book
      .findById(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(400).send({
            message: 'Book Not Found',
          });
        }
        return book
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
