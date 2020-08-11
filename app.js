// let dog = require('./dog.js')
// let cat = require('./cat.js')

// console.log(dog.name)

// let pets = require('./pets.js')

// let dog = pets[0]
// let cat = pets[1]

// console.log(dog, cat)

let movies = require('./favoriteMovies.js')

console.log('Favorite Movies:')
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
}


