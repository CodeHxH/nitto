const router = require('express').Router();

const { renderIndex } = require('../handlers/handlers');
const { validateForm } = require('../helpers/helpers');

router.get('/', renderIndex);

module.exports = router;
