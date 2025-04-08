const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl } = require('../controllers/urlController');
const db = require('../../models'); // to access Url & Click

router.post('/shorten', shortenUrl);
router.get('/r/:shortCode', redirectUrl);

// 🆕 Dashboard Route
router.get('/dashboard', async (req, res) => {
  const { Url, Click } = db;

  try {
    const urls = await Url.findAll();

    // Map each URL to its click count
    const enriched = await Promise.all(
      urls.map(async (url) => {
        const clickCount = await Click.count({ where: { shortCode: url.shortCode } });
        return {
          ...url.dataValues,
          clickCount
        };
      })
    );

    res.render('dashboard', { urls: enriched });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading dashboard');
  }
});

module.exports = router;
