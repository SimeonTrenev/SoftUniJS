function schoolLibrary (input){
 
    let array = input.slice();

    let bookShelf = array.shift().split('&')
    
    for(let elements of array){
        let currentCommands = elements.split(' | ')
        let command = currentCommands[0];
        let currentBookName = currentCommands[1]

        if(command === 'Add Book'){
            if(!bookShelf.includes(currentBookName)){
                bookShelf.unshift(currentBookName)
            }
        }else if(command === 'Take Book'){
            if(bookShelf.includes(currentBookName)){
                let index = bookShelf.indexOf(currentBookName)
                bookShelf.splice(index,1)
            }
        }else if(command === 'Swap Books'){
            let newBook = currentCommands[2]
            if(bookShelf.includes(currentBookName) && bookShelf.includes(newBook)){
                let indexOfFistBook = bookShelf.indexOf(currentBookName)
                let indexOfSecondBook = bookShelf.indexOf(newBook)
                let valueOfFirstBook = bookShelf[indexOfFistBook]
                bookShelf[indexOfFistBook] = bookShelf[indexOfSecondBook]
                bookShelf[indexOfSecondBook] = valueOfFirstBook
            }
        }else if(command === 'Insert Book'){
            bookShelf.push(currentBookName)
        }else if(command === 'Check Book'){
            let index = Number(currentCommands[1])
            if(bookShelf.includes(bookShelf[index])){
                console.log(bookShelf[index])
            }
        }else if(command === 'Done'){
            console.log(bookShelf.join(', '))
            break;
        }
    }


    

}
schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Done',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ])