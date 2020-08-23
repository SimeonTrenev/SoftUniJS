function movies(array){

    let movies = []

    array.forEach(line => {
        let tokens = line.split(' ')
        let addMovieIndex = tokens.indexOf('addMovie')
        let directorIndex = tokens.indexOf('directedBy')
        let dateIndex = tokens.indexOf('onDate')

        if(addMovieIndex > -1){
            movies.push({name : tokens.slice(addMovieIndex + 1).join(' ')})
        }

        if(directorIndex > -1){
            const name = tokens.slice(0,directorIndex).join(' ');
            const director = tokens.slice(directorIndex + 1).join(' ')
            
            movies.forEach(movie => {
                if(movie.name === name){
                    movie.director = director;
                }
            })
           
        }

        if(dateIndex > -1){
            const name = tokens.slice(0,dateIndex).join(' ')
            const date = tokens.slice(dateIndex + 1).join(' ')
            
            movies.forEach(movie =>{
                if(movie.name === name){
                    movie.date = date
                }
            })
        }
        
    });

    movies.forEach(movie =>{
        if(movie.name !== undefined 
            && movie.director !== undefined 
            && movie.date !== undefined){
            console.log(JSON.stringify(movie))
        }
    })


    
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ])