const str = `
010-1234-5678
theamazon121@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const h = `  the hello  world     !

`
console.log(
  str.match(/(?<=@).{1,}/g)
)