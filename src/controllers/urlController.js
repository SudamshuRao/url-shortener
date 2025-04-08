const generateShortCode = require('../utils/generateShortUrl');
const db = require('../../models');
const { Url, Click } = db;

// POST /shorten
const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: 'Missing longUrl in request body' });
  }

  const shortCode = generateShortCode();

  try {
    const newUrl = await Url.create({ longUrl, shortCode });
    const shortUrl = `${req.protocol}://${req.get('host')}/r/${shortCode}`;
    return res.json({ shortUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

// GET /r/:shortCode
const redirectUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const found = await Url.findOne({ where: { shortCode } });

    if (found) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      await Click.create({ shortCode, ip, userAgent });
      console.log(`✅ Click logged for ${shortCode} from ${ip}`);

      return res.redirect(found.longUrl);
    } else {
      return res.status(404).send('Short URL not found');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
};

module.exports = {
  shortenUrl,
  redirectUrl
};
