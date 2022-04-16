// ファイルを非同期で読み込む
const fs = require('fs')

const main = () => {
// ファイルの読み込み
  fs.readFile('meigen.txt', 'utf-8', meigenLoaded)
}

const meigenLoaded = (err, data) => {
  if (err) {
    console.log('読み込みに失敗')
    return
  }
  console.log(data)
}

main()
