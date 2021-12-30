const pointsList = [32, 54, 21, 64, 75, 43]
const copyPoints = [...pointsList]
console.log(copyPoints)


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}
const copyToy = {...toy}
console.log(copyToy)

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const newPoint = [...pointsList1, ...pointsList2]
console.log(newPoint)

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const newToy = {...toy1, ...toyUpdate}
console.log(newToy)

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const [one, two, ...rest] = colors
const newColor = [one, ...rest]
console.log(newColor)