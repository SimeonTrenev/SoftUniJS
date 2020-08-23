function password(input) {
    let numberOfPasswords = input.shift();
    
    let regexPass = /^(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1$/;
   
    for (let i = 0; i < numberOfPasswords; i ++) {
      let matches = regexPass.exec(input[i]);
      if(matches){
        console.log(`Password: ${matches.groups.first}${matches.groups.second}${matches.groups.third}${matches.groups.fourth}`);
      } else {
          console.log(`Try another password!`);
      }
    }
  }
password([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ])