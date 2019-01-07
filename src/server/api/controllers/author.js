const Book = require('../model').Book;
const Author = require('../model').Author;

module.exports = {
  list(req, res) {
    return Author
      .findAll({
        order: [
          ['created_at', 'DESC'],
          [{ model: Author, as: 'author' }, 'created_at', 'DESC'],
        ],
      })
      .then((authors) => res.status(200).send(authors))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Author
      .findByPk(req.params.id, {
      })
      .then((author) => {
        if (!author) {
          return res.status(404).send({
            message: 'Author Not Found',
          });
        }
        return res.status(200).send(lecturer);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Author
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })
      .then((author) => res.status(201).send(author))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Author
      .findById(req.params.id)
      .then(author => {
        if (!author) {
          return res.status(400).send({
            message: 'Author Not Found',
          });
        }
        return author
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
