
let num = [5, 8, 9, 3]
num[4]=6
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1){
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}



