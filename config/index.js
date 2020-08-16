
// 外部から import config from '../config' や　const config = require('../config') で読み込んで用いる
// config ディレクトリを読み込むと index.js の 内容が読み込まれ，そこで export している 設定ファイルのオブジェクトが渡されることになる
// process.env.NODE_ENV には node 起動時に設定した環境を示す文字列が入っている
// 尚，機密情報が直接書かれているファイルは git 管理しないように .gignore に設定を追加すること
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}