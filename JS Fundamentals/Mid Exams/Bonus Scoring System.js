function bonusScoringSystem(input){

    let array = input.slice();
    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let initialBonus = Number(array.shift());
    let maximumScore = 0;
    let maximumLectures = 0;

    for(let i = 0 ; i < students;i++){
        let currentAttendance = Number(array[i]);

        if(currentAttendance > maximumLectures){
            maximumLectures = currentAttendance
        }
    }
    
    if(lectures > 0){
    maximumScore = maximumLectures / lectures * (5 + initialBonus)
    console.log(`Max Bonus: ${Math.ceil(maximumScore)}.`)
    console.log(`The student has attended ${maximumLectures} lectures.`)
    }else{
    console.log((`Max Bonus: ${maximumScore}.`))
    console.log(`The student has attended ${maximumLectures} lectures.`)
    }
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])



// function bonusScoringSystem(arr){

//     let array = arr.slice();
//     let students = Number(array.shift());
//     let lectures = Number(array.shift());
//     let initialBonus = Number(array.shift());
    
//     let maximumScore = 0
    
//     let totalBonus = 0;

//     for(let i = 0; i < students;i++){
//         let countOfAttendance = Number(array[i]);
//         if(countOfAttendance <= lectures){
//             if(countOfAttendance > maximumScore){
//                 maximumScore = countOfAttendance
//                 totalBonus = Math.ceil((maximumScore / lectures) * (5 + initialBonus))
//             }
//         }
        
        
        
//     }
//     console.log(`Max Bonus: ${totalBonus}.`)
//     console.log(`The student has attended ${maximumScore} lectures.`)

// }