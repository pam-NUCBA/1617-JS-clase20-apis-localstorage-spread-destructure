//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const sumar = (a, b, c) => a + b + c

const arrNums = [15, 8, 16]

console.log(sumar(...arrNums))

//*como alternativa a hacer esto:
//console.log(sumar(arrNums[0], arrNums[1], arrNums[2]))