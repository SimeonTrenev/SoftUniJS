    function solve(input){

        let neededHours = Number(input.shift());
        let days = Number(input.shift());
        let employersEmergency = Number(input.shift());
        let obuchenie = days * 0.1;
        let workingTime = 8;
        let emergencyHours = 2;

        let problem = (days - obuchenie) * workingTime ;
        let emergencyProblem = employersEmergency * emergencyHours * days;
        let all = problem + emergencyProblem;
        let resolveProblem = Math.abs(Math.floor(all - neededHours));

        if(all >= neededHours){
            console.log(`Yes!${resolveProblem} hours left.`)
        } else if(neededHours > all){
            console.log(`Not enough time!${resolveProblem} hours needed.`)
        }
        





    }

solve(['99', '3', '1']);