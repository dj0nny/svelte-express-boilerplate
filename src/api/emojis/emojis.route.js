const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    emojis: [
      '😀',
      '😁',
      '😂',
      '🤣',
    ],
  });
});

module.exports = router;