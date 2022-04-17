const fs = require('fs')

// --- 同期的にファイルを読み込む ---
const data = fs.readFileSync('meigen.txt', 'utf-8')
console.log(data)

// --- 非同期的にファイルを読み込む ---
fs.readFile('meigen.txt', 'utf-8', readHandler)

function readHandler(err, data) {
  console.log(data)
}
