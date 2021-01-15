let url = "https://fluttering-achieved-syringa.glitch.me/movies"

let test = {
    title: 'movie title',
    rating: 4,
    director: 'Daniel'
}

const generateMovieDisplay = ({
                                  title,
                                  rating,
                                  director = "No Director listed"
}) => {
    // let { title, rating, director } = movie

    // make ELEMENTS
    let body = document.createElement('div')
    let firstLine = document.createElement('div')

    let titleDisplay = document.createElement('p')
    let ratingDisplay = document.createElement('span')

    let directorDisplay = document.createElement('p')

    // ADD CONTENT
    body.setAttribute('class' , 'single-movie')

    titleDisplay.innerText = title

    ratingDisplay.innerText = rating

    directorDisplay.innerText = director

    // ASSEMBLY
    firstLine.appendChild(titleDisplay)
    firstLine.appendChild(ratingDisplay)

    body.appendChild(firstLine)
    body.appendChild(directorDisplay)



    document.getElementById('movie').appendChild(body)

}

generateMovieDisplay(test)

fetch(url).then(function(response){
    // console.log(response)
    return response.json()
}).then(function(movies){
    console.log(movies)
})






let newMovie = {
    "title": "The Dark Knight",
    "rating": "5",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg",
    "year": "2008",
    "genre": "Action, Thriller, ",
    "director": "Christopher Nolan",
    "plot": "Batman struggles to maintain order against the Joker.",
    "actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman",
    "id": `${Math.random() * 2000}`
}

const optionAdd = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
}

const addMovie = (movie) => {
    fetch(url, optionAdd).then(function(response){
        console.log(response)
    })
}

// addMovie(newMovie)