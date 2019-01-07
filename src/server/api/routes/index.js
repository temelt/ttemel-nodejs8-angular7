var express = require('express');
var router = express.Router();

const authorController = require('../controllers').author;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* authorController Router */
router.get('/api/author', authorController.list);
router.get('/api/author/:id', authorController.getById);
router.post('/api/author', authorController.add);
router.delete('/api/author/:id', authorController.delete);

module.exports = router;
