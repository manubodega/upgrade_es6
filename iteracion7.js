const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
let sumaNotas = exams.reduce((acum, exam) => acum + exam.score, 0)
console.log(sumaNotas)


let sumaAprobados = exams.reduce((acum, exam) => {
    if (exam.score >= 5){
        return acum + exam.score
    }
    else{return acum}
},0)
console.log(sumaAprobados)

let media = sumaNotas / exams.length
console.log(media)