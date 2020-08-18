const router = require('express').Router();
const emojis = require('./emojis/emojis.route');

router.get('/', (req, res) => {
  res.status(200).json({
    message: '🍕 Api route 🍕',
  });
});

// routes registration
router.use('/emojis', emojis);

module.exports = router;