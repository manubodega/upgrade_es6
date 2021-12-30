const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const newAges = ages.filter(age => age >= 18)
console.log(newAges)

const parAges = ages.filter( age => age%2 == 0)
console.log(parAges)


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const newStreamers = streamers.filter(streamer => streamer.gameMorePlayed == 'League of Legends')
console.log(newStreamers)

const newStreamers2 = streamers.filter((streamer) => {
    if (streamer.name.includes('u')){
        return streamer
    }
})
console.log(newStreamers2)

const newStreamers3 = streamers.filter((streamer) => {
    if (streamer.age >= 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    if (streamer.gameMorePlayed.toUpperCase().includes('Legends'.toUpperCase())){
        console.log('entro aqui') 
        return streamer
    }
})
console.log(newStreamers3)


window.onload = () => {
    let input = document.querySelector('input')
    let button = document.querySelector('button')
    let newStreamers4
    // input.addEventListener('input', () => {
    button.addEventListener('click', () => {
        newStreamers4 = streamers.filter(streamer => {
            if (streamer.name.toUpperCase().includes(input.value.toUpperCase())){
                return streamer
            }
        })
        console.log(newStreamers4)
    })
    
    
}

 