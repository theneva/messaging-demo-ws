const cors = require('cors');
const router = require('express').Router();

router.use(cors());

router.get('/', (req, res) => res.send('Hello from the API!'));

module.exports = router;
