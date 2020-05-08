function solve(input){

    let comand = input.shift();
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let counterForAllTickets = 0;
    let isFinish = false;
    while(comand !== 'Finish'){
        let freeSeats = +input.shift();
        let typeOfTicket = input.shift();
        let sellTickets = 0;
        while(typeOfTicket !== 'End' && freeSeats > sellTickets){
            if(typeOfTicket === 'standard'){
                standardTicket++;
                sellTickets++;
                counterForAllTickets++
            }else if(typeOfTicket === 'student'){
                studentTicket++;
                sellTickets++;
                counterForAllTickets++
            }else if(typeOfTicket === 'kid'){
                kidTicket++;
                sellTickets++;
                counterForAllTickets++;
            }
            if(sellTickets >= freeSeats){
                break;
            }
            typeOfTicket = input.shift();
            if(typeOfTicket === 'Finish'){
                isFinish = true;
                break;
            }
        }
        if(isFinish){
            break;
        }
        console.log(`${comand} - ${((sellTickets / freeSeats) *100).toFixed(2)}% full.`)
        comand = input.shift()
        // if(comand === 'Finish'){
        //     isFinish = true;
        //     break;
        // }
    }
    // if(isFinish){
        console.log(`Total tickets: ${counterForAllTickets}`);
        console.log(`${((studentTicket / counterForAllTickets)* 100).toFixed(2)}% student tickets.`);
        console.log(`${((standardTicket / counterForAllTickets)* 100).toFixed(2)}% standard tickets.`);
        console.log(`${((kidTicket / counterForAllTickets)* 100).toFixed(2)}% kids tickets.`);
    // }
}
solve([   'Taxi',     '10',
'standard', 'kid',
'student',  'student',
'standard', 'standard',
'End',      'Scary Movie',
'6',        'student',
'student',  'student',
'student',  'student',
'student',  'Finish'])