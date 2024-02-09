let num = [2, 5, 4, 3, 1]
num.push(6)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('ERRO! Esse valor não foi encontrado, tente novamente.')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
