    function solve(input){
        let appraisers = Number(input.shift());
        let presentationName = input.shift();
        // let nextIndex = 2;
        let allSumOfScores = 0
        let counter = 0
        while(presentationName !== 'Finish'){
            let sumOfScores = 0;
        for(let i = 0;i < appraisers;i++){
            let scores = Number(input.shift())
            sumOfScores += scores
            // nextIndex++;       
        }
        let averageGrade = (sumOfScores / appraisers)
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`)
        allSumOfScores += averageGrade;
        presentationName = input.shift()
        
        // nextIndex++;
        counter++;
    }
        console.log(`Student's final assessment is ${(allSumOfScores / counter).toFixed(2)}.`)
    }
solve(['2',        'While-Loop',
'6.00',     '5.50',
'For-Loop', '5.84',
'5.66',     'Finish',
''])