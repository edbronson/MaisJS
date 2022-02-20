
let valores = [5, 8, 9, 3, 4, 2]
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//o decima comentado é o código tradicional de percurso em vetores,
 mas tem um jeito mais simplificado que é o debaixo.
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}