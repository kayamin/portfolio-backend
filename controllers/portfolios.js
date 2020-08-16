
const config = require('../config')

exports.getPortfolios = (req, res) => {
  return res.json({data: config.ENV_MESSAGE});
}