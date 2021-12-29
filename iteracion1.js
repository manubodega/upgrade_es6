let suma = (a = 10,b = 5) => {
    return (a+b)
}

suma1 = suma()
suma2 = suma(1)
suma3 = suma(3,7)

console.log('La suma 1 = ' + suma1)
console.log('La suma 2 = ' + suma2)
console.log('La suma 3 = ' + suma3)