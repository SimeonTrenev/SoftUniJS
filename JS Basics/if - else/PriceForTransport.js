function solve(input){

  let n = Number(input.shift());   // br kilometri
  let dayOrNight = input.shift();

  let startPriceForTaxi = 0.7;
  let dayPriceForTaxi = 0.79;
  let nightPriceForTaxi = 0.9;
  let allTaxiTaxDay = startPriceForTaxi + n * dayPriceForTaxi;
  let allTaxiTaxNight = startPriceForTaxi + n * nightPriceForTaxi;

  let dayPriceForBus = 0.09;
  let nightPriceForBus = 0.09;
  let allBussPriceDay = dayPriceForBus * n;
  let allBussPriceNight = nightPriceForBus * n;

  let dayPriceForTrain = 0.06;
  let nightPriceForTrain = 0.06;
  let allTrainPriceDay = dayPriceForTrain * n;
  let allTrainPriceNight = nightPriceForTrain * n;


  if(n < 20){
      if( dayOrNight === 'day'){
      console.log(allTaxiTaxDay.toFixed(2))
      } else if(dayOrNight === 'night'){
          console.log(allTaxiTaxNight.toFixed(2))
      }
  }else if(n >= 20 && n < 100){
      console.log(allBussPriceDay.toFixed(2))
  }else if(n >= 100){
      console.log(allTrainPriceDay.toFixed(2))
  }


  
  
  



}
solve(['5', 'day']);