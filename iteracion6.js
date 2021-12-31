const numbers = [32, 21, 63, 95, 100, 67, 43]
const number = numbers.find(n => n == 100)
console.log(number)


const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const movie = movies.find(m => m.date == 2010)
console.log(movie)


const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const alien = aliens.find(a => a.name = 'Cucushumushu')
const mut = mutations.find(m => m.name = 'Porompompero')
const fusion = {...alien, mutation: mut}
console.log(fusion)