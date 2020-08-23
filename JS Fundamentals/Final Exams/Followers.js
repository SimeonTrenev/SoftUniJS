function followers(array){

    let object = {}

    for(let elements of array){
        let [command, username, secondParameter] = elements.split(': ')
        
        if(command === 'New follower'){
            if(!object.hasOwnProperty(username)){
                object[username] = {likes: 0, comments: 0}
            }
        }else if(command === 'Like'){
            let likes = Number(secondParameter)

            if(object.hasOwnProperty(username)){
                object[username].likes += likes
            }else{
                object[username] = {likes, comments: 0}
            }
        }else if(command === 'Comment'){
            if(object.hasOwnProperty(username)){
                object[username].comments += 1
            }else{
                object[username] = {comments: 1, likes: 0}
            }
        }else if(command === 'Blocked'){
            if(object.hasOwnProperty(username)){
                delete object[username];
            }else{
                console.log(`${username} doesn't exist.`)
            }
        }else if(command === 'Log out'){
            let sorted = Object.entries(object).sort((a,b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]))
            
            console.log(`${sorted.length} followers`)
            for(let names of sorted){
                console.log(`${names[0]}: ${names[1].likes + names[1].comments}`)
            }
        }
    }
    
}
followers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
  ])