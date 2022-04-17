const fs = require('fs')

// --- 非同期的にファイルを読み込む ---
fs.readFile('meigen.txt', 'utf-8', function(err, data) {
  console.log(data)
})
