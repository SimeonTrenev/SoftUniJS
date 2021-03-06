function solve(input){
    let arr = input.split(' ');
    let materials = {};
    let keyMaterails = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };
    let winner = '';
    for(let i = 0 ; i <= arr.length-1; i+=2){
      let quantity = Number(arr[i]);
      let  material = arr[i+1].toLowerCase();
   
      if(material === 'shards' || material === 'fragments' || material === 'motes'){
          keyMaterails[material] += Number(quantity);
          if(keyMaterails[material]>= 250 && material === 'shards'){
              winner = 'Shadowmourne' ;
              keyMaterails[material] -= 250;
              break;
           }
           else if(keyMaterails[material]>= 250 && material === 'fragments'){
               winner = 'Valanyr' ;
               keyMaterails[material] -= 250;
               break;
            }
            else if(keyMaterails[material]>= 250 && material === 'motes'){
               winner = 'Dragonwrath' ;
               keyMaterails[material] -= 250;
               break;
            }
      }  
   
      else{
          if(!materials.hasOwnProperty(material)){
              materials[material] = Number(quantity);
          }
          else{
              materials[material] += Number(quantity);
          }
      }
   
    }
    console.log(`${winner} obtained!`);
   
    let sortedkeyMaterails = Object.entries(keyMaterails);
    //console.log(sortedkeyMaterails);
    sortedkeyMaterails.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // for (let [material, quantity] of sortedkeyMaterails) {
    //   sortedkeyMaterails.sort(sortDescending);
    //   if(quantity === sortedkeyMaterails[1][1] ){
    //       sortedkeyMaterails.sort(sortAlphabetically);
    //   }
    // }
   
    let sortedMaterails = Object.entries(materials);
    sortedMaterails.sort(sortAlphabetically);
    //for (let [material, quantity] of sortedMaterails) {
     // sortedMaterails.sort(sortAlphabetically);
    //}
   
    function sortDescending(firstMaterial, secondMaterial){
      let firstQuantity = firstMaterial[1];
      let secondQuantity = secondMaterial[1];
      return secondQuantity - firstQuantity;
     }
   
      function sortAlphabetically(firstMaterial, secondMaterial){
         let firstMaterialName = firstMaterial[0];
         let secondMaterialName = secondMaterial[0];
        return firstMaterialName.localeCompare(secondMaterialName);
      }
      for(let [material, quantity] of sortedkeyMaterails){
          console.log(`${material}: ${quantity}`);
      }
      for(let [material, quantity] of sortedMaterails){
          console.log(`${material}: ${quantity}`);
      }
  }
  solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')