const express = require("express");
const router = express.Router();
const { getPortfolios } = require("../controllers/portfolios");

// routes ディレクトリにはこのように ルーティング設定を記述する
// ルーティング先の処理は controllers ディレクトリに記述する
router.get("/portfolios", getPortfolios);

module.exports = router;
