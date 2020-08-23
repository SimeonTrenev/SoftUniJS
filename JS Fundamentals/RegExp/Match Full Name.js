function matchFullName(text){

    let array = []
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g
    let match = pattern.exec(text)
    while(match){
        array.push(match[0])
        match = pattern.exec(text)
    }
    console.log(array.join(' '))

    // let ll = text.match(pattern)
    // console.log(ll.join(' '))

}
matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ])