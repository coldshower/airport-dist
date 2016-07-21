var express = require('express');
var router = express.Router();
var path = require('path');

var root = path.join(__dirname, '../../');

router.use(express.static(path.join(root, 'public/')));
router.use(express.static(path.join(root, 'node_modules/')));
router.use(express.static(path.join(root, 'browser/')));

module.exports = router;