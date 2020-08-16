//  nodejs 環境では import の代わりに require を用いる
const express = require("express");

// express を用いてサーバーをセットアップ
const server = express();

server.get("/test", (req, res) => {
  return res.json({ message: "test is working!" });
});

// 指定したポートでサーバーを起動
const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server ready on port: ", PORT);
});
