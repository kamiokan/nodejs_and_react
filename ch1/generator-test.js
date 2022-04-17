// Generator関数を定義
function* counter() {
  yield 1
  yield 2
  yield 3
}

// Generatorオブジェクトを生成
const g = counter()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
