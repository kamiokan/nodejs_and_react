const fs = require('fs')
const request = require('request')

request('http://abehiroshi.la.coocan.jp/abe-top-20190328-2.jpg').pipe(fs.createWriteStream('test.png'))
