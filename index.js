//  nodejs 環境では import の代わりに require を用いる
const express = require("express");

// express を用いてサーバーをセットアップ
const server = express();

const portfolioRoutes = require('./routes/portfolios');

server.get("/test", (req, res) => {
  return res.json({ message: "test is working!" });
});

// サーバのエンドポイントは 以下のように追加可能
// server.get('/api/v1/portfolios', (req, res) => {
//   return res.json({data: []})
// })

// サーバーは別のファイルで定義した router を読み込んでエンドポイントを設定することが可能
// server.get で指定したものに追加で設定されるので上書きされることはない
server.use('/api/v1', portfolioRoutes)


// 指定したポートでサーバーを起動
const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server ready on port: ", PORT);
});
