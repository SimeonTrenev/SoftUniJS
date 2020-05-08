    function solve(input){

    let dohod = +input.shift();
    let ocenka = +input.shift();
    let mRZ = +input.shift();
    let socialnaStipendia = mRZ * 0.35;
    let otlichnaStipendia = ocenka * 25;



    if(ocenka >= 5.50 && dohod < mRZ){
        if(socialnaStipendia > otlichnaStipendia){
            console.log(`You get a Social scholarship ${Math.floor(socialnaStipendia)} BGN`)
        }else{
            console.log(`You get a scholarship for excellent results ${Math.floor(otlichnaStipendia)} BGN`)
        }
    }else if(ocenka >= 5.50 && dohod >= mRZ){
        console.log(`You get a scholarship for excellent results ${Math.floor(otlichnaStipendia)} BGN`)
    }else if(ocenka > 4.50 && dohod < mRZ){
        console.log(`You get a Social scholarship ${Math.floor(socialnaStipendia)} BGN`)
    }else{
        console.log('You cannot get a scholarship!')
    }
         






    // if(ocenka < 4.50 || dohod > mRZ){
    //     console.log('You cannot get a scholarship!')
    // } else if(ocenka > 4.50 && dohod < mRZ){
    //     if(socialnaStipendia > otlichnaStipendia){
    //         console.log(`You get a Social scholarship ${Math.floor(socialnaStipendia)} BGN`)
    //     }else if(ocenka >= 5.50){
    //         if(otlichnaStipendia >= socialnaStipendia){
    //             console.log(`You get a scholarship for excellent results ${Math.floor(otlichnaStipendia)} BGN`)
    //         }
    //     }
    // }

    }

solve(['480.00', '4.60', '450.00'])