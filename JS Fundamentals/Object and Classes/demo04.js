function solve(input){

    let movies = []

    for(let key of input){
        let current = key.split(' ')
        if(current[0] === 'addMovie'){
            let filmName = current.slice(1).join(' ')
            movies.push({ name: filmName})
        }else if(current.includes('directedBy')){
            let indexOfDirectBy = current.indexOf('directedBy')
            let filmName = current.slice(0,indexOfDirectBy).join(' ')

            const film = movies.find((obj)=>obj.name === filmName)
            if(film){
                let director = current.slice(indexOfDirectBy + 1).join(' ')
                film.director = director
            }
            

        }else if(current.includes('onDate')){
            let onDateIndex = current.indexOf('onDate')
            let filmName = current.slice(0,onDateIndex).join(' ')

            const film = movies.find((obj) => obj.name === filmName)
            if(film){
                film.date = current.slice(onDateIndex + 1).join(' ')
            }
        }
    }

    const filteredMovies = movies.filter((movie) => Object.keys(movie).length === 3)

    for(let film of filteredMovies){
        console.log(JSON.stringify(film))
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
