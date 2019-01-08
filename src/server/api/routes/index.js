var express = require('express');
var router = express.Router();

const authorController = require('../controllers').authorController;
const bookController = require('../controllers').bookController;
const API_ROOT_PATH = "/api/";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* authorController Router */
router.get(API_ROOT_PATH + 'author', authorController.list);
router.get(API_ROOT_PATH + 'author/:id', authorController.getById);
router.post(API_ROOT_PATH + 'author', authorController.add);
router.delete(API_ROOT_PATH + 'author/:id', authorController.delete);

/* bookController Router */
router.get(API_ROOT_PATH + 'book', bookController.list);
router.get(API_ROOT_PATH + 'book/:id', bookController.getById);
router.post(API_ROOT_PATH + 'book', bookController.add);
router.delete(API_ROOT_PATH + 'book/:id', bookController.delete);

module.exports = router;
