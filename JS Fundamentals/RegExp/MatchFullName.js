function solve(text){

    let regExp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while((validName = regExp.exec(text)) !== null){
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '))
    // let ll = text.match(regExp)
    // console.log(ll.join(' '))

}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")