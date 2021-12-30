const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const userName = users.map(names => names.name)
console.log(userName)


const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const usersName2 = users2.map((names) => {
    if (names.name[0] == 'A'){
        names.name = 'Anacleto'
    }
    return names['name']
})
console.log(usersName2)


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const cities2 = cities.map((city) => {
    if (city.isVisited === true){
        city.name = city.name + " (Visitado)"
    }
    return city.name
})
console.log(cities2)