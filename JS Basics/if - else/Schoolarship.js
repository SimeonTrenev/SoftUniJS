        function solve(input){

            let income = Number(input.shift());
            let middleScore = Number(input.shift());
            let minimumSalary = Number(input.shift());
            let socialShip = minimumSalary * 0.35; // 147 lv
            let schoolarShip = middleScore * 25;  ///115 lv.
                
            
        

        if(middleScore >= 5.50 && income < minimumSalary){
            if(socialShip > schoolarShip){
                console.log(`You get a Social scholarship ${Math.floor(socialShip)} BGN`)
            }else {
            console.log(`You get a scholarship for excellent results ${Math.floor(schoolarShip)} BGN`)
            }
        }else if(middleScore >= 5.50 && income >= minimumSalary){
            console.log(`You get a scholarship for excellent results ${Math.floor(schoolarShip)} BGN`)
        }else if(middleScore > 4.50 && income < minimumSalary){
            console.log(`You get a Social scholarship ${Math.floor(socialShip)} BGN`)
        } else{
            console.log("You cannot get a scholarship!")
        }
    }

    

solve(['300', '5.65', '420.00']);