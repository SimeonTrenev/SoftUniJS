function schoolGrades(array){

    let mapped = new Map();

    for(let elements of array){
        let name = elements.split(' ')[0]
        let grades = elements.split(' ').slice(1).map(Number)
        if(mapped.has(name)){
            let oldGrades = mapped.get(name)
            let newGrades = oldGrades.concat(grades)
            mapped.set(name,newGrades)
        }else{
            mapped.set(name,grades)
        }
    }
    let iterated = Array.from(mapped.entries()).sort((a,b) => {
        let studentsGradeA = a[1]
        let studentsGradeB = b[1]

        let averageGradesA = averageGrades(studentsGradeA)
        let averageGradesB = averageGrades(studentsGradeB)
        return averageGradesA - averageGradesB;

    });
    
    for(let kvp of iterated){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }

    function averageGrades(grades){
        let gradesSum = 0;

        for(let elements of grades){
            gradesSum += elements
        }
        return gradesSum / grades.length;
    }
   
    

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)