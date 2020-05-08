function createProjects(input){
    let name = input.shift();
    let projectCount = Number(input.shift());

    
    console.log(`The architect ${name} will need ${projectCount * 3} hours to complete ${projectCount} project/s.`)

}
createProjects(["George", "4"]);
