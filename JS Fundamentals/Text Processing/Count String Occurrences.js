function countStringOccurrences(text, char){

    let count = 0;
    let iterated = text.split(' ').forEach(element => {
        if(element === char){
            count++;
        }
        return count;
    });
    
    console.log(count)

    // let count = 0;
    // let index = text.indexOf(` ${char} `)

    // while(index > -1){
    //     count++;
    //     index = text.indexOf(` ${char} `,index + 1)
    // }

    // if(text.startsWith(char)){
    //     count++;
    // }

    // if(text.endsWith(char)){
    //     count++;
    // }

    // console.log(count)
}
countStringOccurrences("This is a word and it also is a sentence",
"is"
)